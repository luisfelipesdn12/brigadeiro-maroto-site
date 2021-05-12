import styled from "styled-components";
import { DescriptionProps } from "./Description";

interface DescriptionWrapperProps extends Omit<DescriptionProps, "content"> {}

export const DescriptionWrapper = styled.p<DescriptionWrapperProps>`
    color: ${(props) => props.color};
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    margin: 0;
    text-align: left;
    font-size: 1.5rem;
`;

DescriptionWrapper.defaultProps = {
    color: "#4a5568",
};

export const ProductList = styled.ul`
    margin: 0;
    margin-block: 0;
    margin-top: 2rem;
    padding: 0;
    padding-inline: 0;
    justify-content: space-between;
    list-style: none;

    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const ProductWrapper = styled.li`
    max-width: 24rem;
    border-radius: 0.75rem;
    overflow: hidden;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    margin: 0;
    margin-bottom: 0.75rem;
    background-color: white;
`;

export const ProductImage = styled.img`
    width: 100%;
`;

export const ProductInfo = styled.div`
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: left;
`;

export const ProductName = styled.h1`
    color: #744210;
    font-weight: 700;
    font-size: 1.25rem;
`;

export const ProductPrice = styled.p`
    color: #1a202c;
    font-weight: 600;
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
`;

export const ProductDescription = styled.p`
    color: #4a5568;
    font-size: 1rem;

    @media (min-width: 768px) {
        min-height: 50px;
    }
`;

export const ProductAvailability = styled.p`
    color: #744210;
    font-size: 1rem;
`;

export const Divisor = styled.hr`
    border-top-width: 1px;
    margin-left: 0.75rem;
    margin-right: 0.75rem;

    @media (min-width: 640px) {
        grid-column-start: 2;
        grid-column-end: 8;
    }

    @media (min-width: 1280px) {
        grid-column-end: 6;
    }
`;

export const DivisorContainer = styled.span`
    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(6, 1fr);
    }
`;

export const KitOrderContainer = styled.div`
    display: flex;
    padding: 1rem 0;
`;

export const KitOrderTitle = styled.p`
    color: #1a202c;
    font-weight: 600;
    text-align: left;
    min-width: fit-content;
    margin-right: 0.5rem;
`;

export const BrigadeirosEnumeration = styled(ProductDescription)`
    @media (min-width: 768px) {
        min-height: 0;
    }
`;
