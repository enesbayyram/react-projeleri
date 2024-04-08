import axios from "axios";

const BASE_URL = "http://localhost:8080/hr/api/";

const getTokenFromStorage = () => {
  if (localStorage.getItem("token")) {
    return localStorage.getItem("token");
  }
  return null;
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: getTokenFromStorage(),
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },

  (err) => {
    return Promise.reject(err?.response?.data?.message);
  }
  // async (err) => {
  //   const originalConfig = err.config;
  //   if (err.response) {
  //     if (err.response.status == 500 && !originalConfig._retry) {
  //       originalConfig._retry = true;
  //       try {
  //         const rs = await refreshToken();
  //         if (rs.result) {
  //           localStorage.setItem("token", rs.data.token);
  //           localStorage.setItem("refreshToken", rs.data.refreshToken);

  //           originalConfig.headers.Authorization = `Bearer ${rs.data.token}`;

  //           //uzun süredir aradığım önceki istediği cagırma yapısı :)
  //           axiosx
  //             .request(originalConfig)
  //             .then((res) => res)
  //             .catch((err) => console.log("original request error", err));
  //         } else {
  //           logout();
  //         }
  //         return instance(originalConfig);
  //       } catch (error) {
  //         if (error.response && error.response.data) {
  //           return Promise.reject(error.response.data);
  //         }
  //       }
  //     }
  //     return Promise.reject(err);
  //   }
  // }
);

export default axiosInstance;
