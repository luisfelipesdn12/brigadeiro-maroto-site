import { useContext } from "react";
import Order from "../../../../../models/Order";
import { MaximumQuantityBeated } from "../../../../../models/Order/BrigadeiroOrder";
import OrderContext from "../../../../../store/OrderContext";
import { ClickableControl } from "../styles";
import { BrigadeiroQuantityControlWrapper } from "./styles";

interface BrigadeiroQuantityControlProps {
    kitID: string;
    brigadeiroID: string;
}

const BrigadeiroQuantityControl: React.FC<BrigadeiroQuantityControlProps> = ({
    kitID,
    brigadeiroID,
}) => {
    const [order, setOrder] = useContext(OrderContext);

    const addBrigadeiro = () => {
        const newBrigadeiroOrders = order.kitOrder.getBrigadeirosOrdered(kitID);

        const brigadeiroQuantity = newBrigadeiroOrders[
            newBrigadeiroOrders.length - 1
        ].getQuantityOrdered(brigadeiroID);

        try {
            newBrigadeiroOrders[
                newBrigadeiroOrders.length - 1
            ].updateProductQuantity(brigadeiroID, brigadeiroQuantity + 1);
        } catch (error) {
            if (error instanceof MaximumQuantityBeated) {
                newBrigadeiroOrders[
                    newBrigadeiroOrders.length - 1
                ].updateProductQuantity(brigadeiroID, brigadeiroQuantity);
            } else {
                throw error;
            }
        }

        order.kitOrder.updateBrigadeirosOrdered(kitID, newBrigadeiroOrders);

        const newOrder = new Order();
        Object.assign(newOrder, order);

        setOrder(newOrder);
    };

    return (
        <BrigadeiroQuantityControlWrapper>
            <p>
                {order.kitOrder
                    .getBrigadeirosOrdered(kitID)
                    [
                        order.kitOrder.getBrigadeirosOrdered(kitID).length - 1
                    ]?.getQuantityOrdered(brigadeiroID) || 0}
            </p>
            <ClickableControl
                onClick={addBrigadeiro}
                style={{
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                }}
            >
                +
            </ClickableControl>
        </BrigadeiroQuantityControlWrapper>
    );
};

export default BrigadeiroQuantityControl;
