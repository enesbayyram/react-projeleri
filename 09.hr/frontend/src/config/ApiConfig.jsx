import axios from "axios";
import { toast } from "react-toastify";
import storageService from "../services/StorageService";
import toastService from "../services/ToastService";
import { TOKEN } from "../contants/StorageConstant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/slices/appSlice";
import { useNavigate } from "react-router-dom";

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
  const response = await axiosInstance.post("/refreshToken", payload);
  return response;
};

const logout = () => {
  storageService.removeToken();
  storageService.removeRefreshToken();
  window.location.href = "/login";
};

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },

  async (err) => {
    const originalConfig = err.config;
    if (err.response) {
      if (err.response.status == 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await refreshToken();
          if (rs.data?.result) {
            storageService.writeToken(rs.data?.data?.token);
            storageService.writeRefreshToken(rs.data?.data?.refreshToken);

            originalConfig.headers.Authorization = `Bearer ${rs.data?.data?.token}`;

            //uzun süredir aradığım önceki istediği cagırma yapısı :)
            axiosInstance
              .request(originalConfig)
              .then((res) => {
                console.log("axios ", res);
                return res;
              })
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
