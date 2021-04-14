import { useState } from "react";
import { ClickableControl, QuantityControlWrapper } from "./styles";
import BrigadeiroSelector from "./BrigadeiroSelector";

const KitQuantityControl: React.FC = () => {
    const [showBrigadeiroSelector, setShowBrigadeiroSelector] = useState(false);

    return (
        <>
            <BrigadeiroSelector display={showBrigadeiroSelector} />
            <QuantityControlWrapper
                style={{ justifyContent: "center", fontWeight: 300 }}
            >
                <ClickableControl
                    onClick={() => {
                        setShowBrigadeiroSelector(!showBrigadeiroSelector);
                    }}
                >
                    + Adicionar um kit
                </ClickableControl>
            </QuantityControlWrapper>
        </>
    );
};

export default KitQuantityControl;
