import Hero from "../src/components/parts/Hero";
import Order from "../src/components/parts/Order";
import Products from "../src/components/parts/Products";

const Home: React.FC = () => {
    return (
        <>
            <Hero/>
            <Products/>
            <Order/>
        </>
    )
};

export default Home;
