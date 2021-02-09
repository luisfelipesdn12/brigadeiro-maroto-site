import Hero from "../src/components/parts/Hero";
import PreOrder from "../src/components/parts/PreOrder";
import Products from "../src/components/parts/Products";
import FinishOrder from "../src/components/parts/FinishOrder";
import { useState } from "react";
import { ProductShape } from "../src/components/parts/Products/Product";
import { data } from "./_app";
import CreditsFooter from "../src/components/parts/CreditsFooter";

const products: ProductShape[] = (() => {
    const products: ProductShape[] = [];

    data.products_sections.map(section =>
        products.push(...section.products));

    return products;
})();

const Home: React.FC = () => {
    const [order, setOrder] = useState<{ [productID: string]: number }>({});

    return (
        <>
            <Hero/>
            <Products
                order={order}
            />
            <PreOrder/>
            <FinishOrder
                products={products}
                order={order}
            />
            <CreditsFooter/>
        </>
    )
};

export default Home;
