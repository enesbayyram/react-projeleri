export interface LoginResponse {
    id?: string,
    balance: number,
    username?: string,
    password?: string
}

export interface AppSliceType {
    currentUser: LoginResponse | null,
    loading: boolean,
    drawer: boolean
}

export interface ProductType {
    id?: number,
    title?: string,
    price?: number,
    description?: string,
    category?: string,
    image?: string,
    rating?: RatingType,
    count?: number
}

interface RatingType {
    rate: number,
    count: number
}


export interface CategoryType {
    id: number,
    category: string
}


