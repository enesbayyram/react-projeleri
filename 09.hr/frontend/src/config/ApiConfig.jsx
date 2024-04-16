import axios from "axios";
import { toast } from "react-toastify";
import storageService from "../services/StorageService";
import toastService from "../services/ToastService";
import { TOKEN } from "../contants/StorageConstant";

const BASE_URL = "http://localhost:8080/hr/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${storageService.getToken()}`,
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

const errorHandler = (err) => {
  const errorMessage = err?.response?.data?.message;
  toastService.error(errorMessage);
};

const refreshToken = async () => {
  const payload = {
    refreshToken: storageService.getRefreshToken(),
  };
  const response = await axiosInstance.post(payload);
  return response;
};

const logout = () => {
  storageService.removeToken();
  storageService.removeRefreshToken();
};

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },

  async (err) => {
    debugger;
    const originalConfig = err.config;
    if (err.response) {
      if (err.response.status == 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await refreshToken();
          if (rs.result) {
            storageService.writeToken(rs.data.token);
            storageService.writeRefreshToken(rs.data.refreshToken);

            originalConfig.headers.Authorization = `Bearer ${rs.data.token}`;

            //uzun süredir aradığım önceki istediği cagırma yapısı :)
            axiosInstance
              .request(originalConfig)
              .then((res) => res)
              .catch((err) => errorHandler(err));
          } else {
            logout();
          }
          return instance(originalConfig);
        } catch (err) {
          errorHandler(err);
        }
      }
    }
    errorHandler(err);
    return Promise.reject(err?.response?.data?.message);
  }
);

export default axiosInstance;
