import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../src/store/OrderContext";
import CreditsFooter from "../src/components/parts/CreditsFooter";
import Hero from "../src/components/parts/Hero";
import Products from "../src/components/parts/Products";
import FinishOrder from "../src/components/parts/FinishOrder";

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

const Home: React.FC = () => {
    const [order, setOrder] = useContext(OrderContext);

    return (
        <>
            <Hero />
            <Products />
            <FinishOrder />
            <CreditsFooter />
        </>
    );
};

export default Home;
