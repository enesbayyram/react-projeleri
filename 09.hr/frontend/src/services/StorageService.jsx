import { TOKEN, REFRESH_TOKEN } from "../contants/StorageConstant";
class StorageService {
  writeToken = (token) => {
    localStorage.setItem(TOKEN, token);
  };

  writeRefreshToken = (refreshToken) => {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  };

  getToken = () => {
    return localStorage.getItem(TOKEN);
  };

  getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN);
  };

  removeToken = () => {
    localStorage.removeItem(TOKEN);
  };

  removeRefreshToken = () => {
    localStorage.removeItem(REFRESH_TOKEN);
  };
}

export default new StorageService();
