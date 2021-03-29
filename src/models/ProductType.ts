import Product from "./Product";

export default interface ProductType {
    id: string;
    name: string;
    description: string;
    only_pre_ordering?: boolean;
    products: Product[];
}
