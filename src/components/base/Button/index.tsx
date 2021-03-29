import { ButtonWrapper } from "./styles";

interface ButtonProps {
    label: string;
    handleClick: () => void;
    isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    handleClick,
    isDisabled,
    ...stylingProps
}) => {
    return (
        <ButtonWrapper
            onClick={handleClick}
            disabled={isDisabled}
            {...stylingProps}
        >
            {label}
        </ButtonWrapper>
    );
};

export default Button;
