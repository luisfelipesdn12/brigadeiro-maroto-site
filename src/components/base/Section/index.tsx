import { SectionWrapper, DivWrapper } from "./styles";

// bg-orange-900 bg-opacity-50 p-3 pb-20
export interface SectionProps {
    bgColor?: string,
    bgImageURL?: string,
    padding?: string,
    paddingBotton?: string,
}

const Section: React.FC<SectionProps> = ({ children, ...stylingProps }) => {
    return (
        <SectionWrapper {...stylingProps}>
            <DivWrapper>
                {children}
            </DivWrapper>
        </SectionWrapper>
    )
}

export default Section;
