export default interface Product {
    id: string;
    name: string;
    description: string;
    image_url: string;
    quantity_on_kit?: number;
    price: number;
}
