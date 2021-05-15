import { useContext, useEffect, useState } from "react";
import { ClickableControl, QuantityControlWrapper } from "./styles";
import { Divisor } from "../styles";
import BrigadeiroSelector from "./BrigadeiroSelector";
import OrderContext from "../../../../store/OrderContext";
import Order from "../../../../models/Order";

interface KitQuantityControlProps {
    productID: string;
}

const KitQuantityControl: React.FC<KitQuantityControlProps> = ({ productID }) => {
    const [order, setOrder] = useContext(OrderContext);

    const [showBrigadeiroSelector, setShowBrigadeiroSelector] = useState(false);
    const [showCancelMessage, setShowCancelMessage] = useState(false);

    const startBrigadeiroOrderSelection = () => {
        order.kitOrder.addNewBrigadeiroOrder(productID);
        setShowBrigadeiroSelector(!showBrigadeiroSelector);
        setShowCancelMessage(!showCancelMessage);

        const newOrder = new Order();
        Object.assign(newOrder, order);

        setOrder(newOrder);
    };

    const finishBrigadeiroOrderSelection = () => {
        setShowBrigadeiroSelector(!showBrigadeiroSelector);
        setShowCancelMessage(!showCancelMessage);
    };

    const cancelBrigadeiroOrderSelection = () => {
        setShowBrigadeiroSelector(!showBrigadeiroSelector);
        setShowCancelMessage(!showCancelMessage);

        order.kitOrder.cancelLastBrigadeiroOrder(productID);

        const newOrder = new Order();
        Object.assign(newOrder, order);

        setOrder(newOrder);
    };

    useEffect(() => {
        if (order.kitOrder.isLastBrigadeiroOrderFull(productID, false)) {
            finishBrigadeiroOrderSelection();
        }
    }, [order]);

    return (
        <>
            <BrigadeiroSelector
                kitID={productID}
                display={showBrigadeiroSelector}
            />
            <Divisor />
            <QuantityControlWrapper
                style={{
                    display: (order.kitOrder
                        .isLastBrigadeiroOrderFull(productID)) ? "flex" : "none",
                    justifyContent: "center",
                    fontWeight: 300,
                }}
            >
                <ClickableControl
                    onClick={
                        showBrigadeiroSelector
                        ? finishBrigadeiroOrderSelection
                        : startBrigadeiroOrderSelection
                    }
                >
                    + Adicionar um kit
                </ClickableControl>
            </QuantityControlWrapper>
            <QuantityControlWrapper
                style={{
                    display: showCancelMessage ? "flex" : "none",
                    justifyContent: "center",
                    fontWeight: 300,
                    paddingTop: (order.kitOrder
                        .isLastBrigadeiroOrderFull(productID)) ? "0": "1rem",
                }}
            >
                <ClickableControl onClick={cancelBrigadeiroOrderSelection} style={{ color: "#ef4444" }} >
                        Cancelar
                </ClickableControl>
            </QuantityControlWrapper>
        </>
    );
};

export default KitQuantityControl;
