import { SloganWrapper } from "./styles";

export interface SloganProps {
    content: string;
    color?: string;
    marginTop?: string;
    marginBottom?: string;
}

const Slogan: React.FC<SloganProps> = ({ content, ...stylingProps }) => {
    return <SloganWrapper {...stylingProps}>{content}</SloganWrapper>;
};

export default Slogan;
