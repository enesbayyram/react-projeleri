import { AxiosResponse } from "axios";
import axios from "axios";
import { LoginResponse } from "../types/Types";

class LoginPageService {

    BASE_URL = "http://localhost:5000";

    login(): Promise<LoginResponse[]> {
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/users`)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error) => reject(error));
        })
    }
}


export default new LoginPageService();