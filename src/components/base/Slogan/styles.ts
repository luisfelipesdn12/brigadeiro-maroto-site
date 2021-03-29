import styled from "styled-components";
import { SloganProps } from ".";

interface SloganWrapperProps extends Omit<SloganProps, "content"> {}

export const SloganWrapper = styled.p<SloganWrapperProps>`
    color: ${(props) => props.color};
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    font-size: 1.875rem;
`;

SloganWrapper.defaultProps = {
    color: "black",
};
