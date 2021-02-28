import { useContext } from 'react';
import styled from 'styled-components';
import OrderContext from '../store/OrderContext';

import Form from "../components/Form";

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

const Home: React.FC = () => {
    const [order, setOrder] = useContext(OrderContext);

    return (
        <>
            <Title>{order.brownietOrder.getQuantityOrdered("BROW1")}</Title>
            <Form />
        </>
    )
}

export default Home;
