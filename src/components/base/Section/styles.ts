import styled from "styled-components";
import { SectionProps } from ".";

export const SectionWrapper = styled.section<SectionProps>`
    background-color: ${(props) => props.bgColor};
    padding: ${(props) => props.padding};
    padding-top: ${(props) => props.paddingTop};
    padding-bottom: ${(props) => props.paddingBottom};
    padding-left: ${(props) => props.paddingLeft};
    padding-right: ${(props) => props.paddingRight};
    text-align: ${(props) => props.textAlign};

    background-image: url(${(props) => props.bgImageURL});
    background-size: 300px;
    background-repeat: repeat-x;

    @media (min-width: 640px) {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(6, 1fr);
    }
`;

SectionWrapper.defaultProps = {
    bgColor: "#FFFFFF",
    padding: ".75rem",
};

export const DivWrapper = styled.div`
    margin-left: 16px;
    margin-right: 16px;
    text-align: center;

    @media (min-width: 640px) {
        grid-column-start: 2;
        grid-column-end: 8;
    }

    @media (min-width: 1280px) {
        grid-column-end: 6;
    }
`;
