import { TitleWrapper } from "./styles";

export interface TitleProps {
    content: string;
    color?: string;
    margin?: string;
    marginTop?: string;
    marginBottom?: string;
    textAlign?: string;
}

const Title: React.FC<TitleProps> = ({ content, ...stylingProps }) => {
    return (
        <TitleWrapper {...stylingProps}>{content}</TitleWrapper>
    )
}

export default Title;
