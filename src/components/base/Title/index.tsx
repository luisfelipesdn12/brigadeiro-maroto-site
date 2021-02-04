import { TitleWrapper } from "./styles";

export interface TitleProps {
    content: string;
    color?: string;
    marginTop?: string;
    marginBottom?: string;
}

const Title: React.FC<TitleProps> = ({ content, ...stylingProps }) => {
    return (
        <TitleWrapper {...stylingProps}>{content}</TitleWrapper>
    )
}

export default Title;
