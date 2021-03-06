import { DescriptionWrapper } from "./styles";

export interface DescriptionProps {
    content: string;
    color?: string;
    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    textAlign?: string;
}

const Description: React.FC<DescriptionProps> = ({
    content,
    ...stylingProps
}) => {
    return <DescriptionWrapper {...stylingProps}>{content}</DescriptionWrapper>;
};

export default Description;
