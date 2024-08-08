import axios, { AxiosResponse } from "axios";
import { ProductType } from "../types/Types";
class ProductService {


    BASE_URL = "https://fakestoreapi.com";

    getAllProducts(): Promise<Array<ProductType>> {
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/products`)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error: any) => reject(error));
        })
    }

    getProductById(productId: number): Promise<ProductType> {
        return new Promise((resolve: any, reject: any) => {
            axios.get(`${this.BASE_URL}/products/${productId}`)
                .then((response: AxiosResponse<any, any>) => resolve(response.data))
                .catch((error: any) => reject(error));
        })
    }
}

export default new ProductService();