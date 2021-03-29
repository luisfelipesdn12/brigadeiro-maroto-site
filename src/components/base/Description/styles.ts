import styled from "styled-components";
import { DescriptionProps } from ".";

interface DescriptionWrapperProps extends Omit<DescriptionProps, "content"> {}

export const DescriptionWrapper = styled.p<DescriptionWrapperProps>`
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    text-align: ${(props) => props.textAlign};
    font-size: 1.5rem;
`;

DescriptionWrapper.defaultProps = {
    color: "#4a5568",
    textAlign: "left",
};
