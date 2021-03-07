import Product from "./Product";
import ProductType from "./ProductType";
import Social from "./Social";

export default interface Data {
    name: string;
    about: string;
    slogan: string;
    image_url: string;
    contact: {
        phone_number: string;
    };
    social: {
        instagram: Social;
        tiktok: Social;
    };
    website: {
        url: string;
        favicon: string;
        banner_url: string;
    };
    product_types: {
        kit: ProductType;
        cake: ProductType;
        brownie: ProductType;
    };
    brigadeiros: Product[];
}
