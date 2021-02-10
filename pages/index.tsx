import Hero from "../src/components/parts/Hero";
import PreOrder from "../src/components/parts/PreOrder";
import Products from "../src/components/parts/Products";
import FinishOrder from "../src/components/parts/FinishOrder";
import { useState } from "react";
import CreditsFooter from "../src/components/parts/CreditsFooter";
import getProducts from "../src/utils/getProducts";

const products = getProducts();

const Home: React.FC = () => {
    const [order, setOrder] = useState<{ [productID: string]: number }>((() => {
        const order: { [productID: string]: number } = {};

        products.map(p => {
            order[p.id] = 0;
        });

        return order;
    })());

    return (
        <>
            <Hero/>
            <Products
                order={order}
                setOrder={setOrder}
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
