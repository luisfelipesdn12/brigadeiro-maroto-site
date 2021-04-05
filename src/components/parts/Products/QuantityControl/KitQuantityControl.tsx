import { useState } from "react";
import { ClickableControl, QuantityControlWrapper } from "./styles";
import BrigadeiroSelector from "./BrigadeiroSelector";

const KitQuantityControl: React.FC = () => {
    const [V, setV] = useState(false);

    return (
        <>
            <BrigadeiroSelector display={V}/>
            <QuantityControlWrapper style={{ justifyContent: "center", fontWeight: 300 }}>
                <ClickableControl onClick={() => {
                    setV(!V);
                }}>
                    + Adicionar um kit
                </ClickableControl>
            </QuantityControlWrapper>
        </>
    );
}

export default KitQuantityControl;
