import styled from "styled-components";

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

const Home: React.FC = () => {
    return <Title>My page</Title>;
}

export default Home;
