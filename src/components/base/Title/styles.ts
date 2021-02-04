import styled from "styled-components";
import { TitleProps } from ".";

interface TitleWrapperProps extends Omit<TitleProps, "content"> {}

export const TitleWrapper = styled.h1<TitleWrapperProps>`
    color: ${ props => props.color };
    margin: ${ props => props.margin };
    margin-top: ${ props => props.marginTop };
    margin-bottom: ${ props => props.marginBottom };
    text-align: ${ props => props.textAlign };
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2.25rem;
`;

TitleWrapper.defaultProps = {
    color: "black",
}
