import { data } from "../../pages/_app";
import { ProductShape } from "../components/parts/Products/Product";

const getProducts = (): ProductShape[] => {
    const products: ProductShape[] = [];

    data.products_sections.map(section =>
        products.push(...section.products));

    return products;
}

export default getProducts;
