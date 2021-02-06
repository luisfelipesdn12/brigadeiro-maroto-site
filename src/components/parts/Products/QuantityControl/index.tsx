import {
    QuantityControlWrapper,
    ClickableControl,
    QuantityDisplay
} from "./styles";

const QuantityControl: React.FC = () => {
    return (
        <>
            <QuantityControlWrapper>
                <ClickableControl>-</ClickableControl>
                    <QuantityDisplay>0</QuantityDisplay>
                <ClickableControl>+</ClickableControl>
            </QuantityControlWrapper>
        </>
    )
}

export default QuantityControl;
