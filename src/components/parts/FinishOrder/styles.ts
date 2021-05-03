import styled from "styled-components";

export const ShippingOptionForm = styled.form`
    text-align: left;
    margin-top: 1.5rem;
`;

export const ShippingOptionLabel = styled.label`
    font-size: 1.25rem;
`;

export const TotalPriceWrapper = styled.p`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    @media (min-width: 768px) {
        justify-content: flex-start;
        margin-top: 0;
    }
`;

export const TotalPriceLabel = styled.span`
    color: #1a202c;
    font-size: 1.5rem;
    font-weight: 500;
    margin-right: .5rem;
`;

export const TotalPriceInfo = styled.span`
    color: #1a202c;
    font-size: 1.875rem;
    font-weight: 500;
`;
