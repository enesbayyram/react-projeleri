import { TOKEN, REFRESH_TOKEN } from "../contants/StorageConstant";
class StorageService {
  writeToken = (token) => {
    localStorage.setItem(TOKEN, token);
  };

  writeRefreshToken = (refreshToken) => {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  };

  getToken = () => {
    localStorage.getItem(TOKEN);
  };

  getRefreshToken = () => {
    localStorage.getItem(REFRESH_TOKEN);
  };
}

export default new StorageService();
