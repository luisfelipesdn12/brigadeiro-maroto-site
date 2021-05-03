
import styled from "styled-components";

export const FinalWishListWrapper = styled.ul`
    margin-top: 2rem;
    justify-content: space-between;
    list-style: none;
    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const WishItemWrapper = styled.li`
    border-radius: .75rem;
    background-color: white;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-bottom: .75rem;
    max-width: 24rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const WishItemImage = styled.img`
    border-radius: 9999px;
    float: left;
    width: 2.5rem;
    margin-right: 1.5rem;
    margin-bottom: .75rem;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
`;

export const WishItemName = styled.p`
    color: #1a202c;
    font-weight: 600;
    text-align: left;
`;

export const WishItemQuantityAndPriceContainer = styled.p`
    display: flex;
    justify-content: space-between;
`;

export const WishItemQuantity = styled.p`
    color: #2d3748;
    font-weight: 500;
`;

export const WishItemPrice = styled.p`
    color: #2d3748;
    font-weight: 500;
`;
