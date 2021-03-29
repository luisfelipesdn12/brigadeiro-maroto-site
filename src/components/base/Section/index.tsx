import { SectionWrapper, DivWrapper } from "./styles";

export interface SectionProps {
    bgColor?: string;
    bgImageURL?: string;
    padding?: string;
    paddingTop?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    paddingRight?: string;
    textAlign?: string;
}

const Section: React.FC<SectionProps> = ({ children, ...stylingProps }) => {
    return (
        <SectionWrapper {...stylingProps}>
            <DivWrapper>{children}</DivWrapper>
        </SectionWrapper>
    );
};

export default Section;
