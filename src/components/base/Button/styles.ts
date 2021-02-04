import styled from "styled-components";

export const ButtonWrapper = styled.button`
    background-color: rgba(123, 52, 30, 0.25);
    text-align: center;
    border-radius: .5rem;
    border-top-width: 2px;
    border-right-width: 2px;
    border-bottom-width: 4px;
    border-left-width: 2px;
    border-color: rgba(123, 52, 30, 1);
    width: 100%;
    font-size: 1.25rem;
    color: rgba(26, 32, 44, 1);
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
    padding-top: .75rem;
    padding-bottom: .75rem;
    text-transform: uppercase;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        width: auto;
        margin: 0;
        padding-top: .5rem;
        padding-bottom: .5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
`;
