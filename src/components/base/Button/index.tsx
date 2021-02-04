import { ButtonWrapper } from "./styles";

interface ButtonProps {
    label: string;
    handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, handleClick, ...stylingProps }) => {
    return (
        <ButtonWrapper onClick={handleClick} {...stylingProps}>{label}</ButtonWrapper>
    )
}

export default Button;
