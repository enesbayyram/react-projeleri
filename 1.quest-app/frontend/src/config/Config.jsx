import axios from "axios";
const axiosx = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json" },
});

function getAccessTokenFromStorage() {
  return localStorage.getItem("token");
}

function getRefreshTokenFromStorage() {
  return localStorage.getItem("refreshToken");
}

const refreshToken = async () => {
  const response = await axiosx.post("/auth/refresh", {
    refreshToken: getRefreshTokenFromStorage(),
  });
  return response.data;
};

axiosx.interceptors.request.use(
  (config) => {
    const token = getAccessTokenFromStorage();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userId");
  localStorage.removeItem("username");
  window.location.href = "/auth";
};

axiosx.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (err.response) {
      if (err.response.status == 403 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await refreshToken();
          if (rs.result) {
            localStorage.setItem("token", rs.data.token);
            localStorage.setItem("refreshToken", rs.data.refreshToken);
            return Promise.reject("TOKEN_REFRESH_SUCCESS");
          } else {
            logout();
          }
          instance.defaults.headers.common["x-access-token"] =
            "Bearer " + rs.data.token;
          return instance(originalConfig);
        } catch (error) {
          if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
          }
        }
      }
      return Promise.reject(err);
    }
  }
);

export default axiosx;
