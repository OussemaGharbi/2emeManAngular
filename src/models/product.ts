// Products
export interface Product {
    id?: number;
    title?: string;
    description?: string;
    color?:string;
    size?:string;
    type?: string;
    brand?: string;
    collection?: any[];
    category?: string;
    subcategory?: string;
    price?: number;
    tags?: any[];
    images?: Images[];
}


export interface Images {
    image_id?: number;
    id?: number;
    alt?: string;
    src?: string;
}