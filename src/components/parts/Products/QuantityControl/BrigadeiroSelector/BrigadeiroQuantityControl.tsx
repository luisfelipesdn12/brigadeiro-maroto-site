import { ClickableControl } from "../styles";
import { BrigadeiroQuantityControlWrapper } from "./styles";

const BrigadeiroQuantityControl: React.FC = () => {
    return (
        <BrigadeiroQuantityControlWrapper>
            <ClickableControl style={{
                fontSize: '1.25rem',
                fontWeight: 'bold'
            }}>
                +
            </ClickableControl>
        </BrigadeiroQuantityControlWrapper>
    );
};

export default BrigadeiroQuantityControl;
