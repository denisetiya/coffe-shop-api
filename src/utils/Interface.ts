export interface Product {
    name: string, 
    picture?: string, 
    price: number, 
    category: string, 
    discount?: number, 
    description: string
}

export interface genericProduct {
    id?: string,
    name?: string, 
    price1?: number,
    price2?: number, 
    category?: string, 
    discount?: number, 
}