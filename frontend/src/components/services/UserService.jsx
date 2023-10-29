import axios from "../../config/Config";

class UserService {
  getUser = async (userId) => {
    const response = await axios.get(`/users/${userId}`, {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  };
}

const userService = new UserService();

export default userService;
