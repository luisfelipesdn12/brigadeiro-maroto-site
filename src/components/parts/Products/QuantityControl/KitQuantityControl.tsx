import { ClickableControl, QuantityControlWrapper } from "./styles";

const KitQuantityControl: React.FC = () => {
    return (
        <>
            <QuantityControlWrapper style={{ justifyContent: "center", fontWeight: 300 }}>
                <ClickableControl>
                    + Adicionar um kit
                </ClickableControl>
            </QuantityControlWrapper>
        </>
    );
}

export default KitQuantityControl;
