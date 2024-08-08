import axios, { AxiosResponse } from "axios";
import { LoginResponse } from "../types/Types";

class RegisterPageService {

    BASE_URL = "http://localhost:5000";

    register(newUser: LoginResponse): Promise<LoginResponse> {
        return new Promise((resolve: any, reject) => {
            axios.post(`${this.BASE_URL}/users`, { ...newUser }).
                then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error: any) => reject(error));
        })
    }

}

export default new RegisterPageService();