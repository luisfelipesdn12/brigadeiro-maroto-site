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

export const FormContainer = styled.div`
    font-size: 1.25rem;
    text-align: left;
    width: 100%;
    margin: 1rem 0;
    margin-bottom: 1.5rem;
`;

export const Label = styled.label`
    padding-left: 0.2rem;
    margin-right: 1rem;
`;

export const Input = styled.input`
    font-size: 1.2rem;
    padding: 0.5rem;
    width: 100%;

    border-radius: 0.5rem;
    border-top-width: 2px;
    border-right-width: 2px;
    border-bottom-width: 4px;
    border-left-width: 2px;
    border-color: #1a202c;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);

    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const RequiredNotice = styled.p`
    padding-left: 0.2rem;
    font-size: 1rem;
    color: rgb(239, 68, 68);
`;
