import { useContext, useEffect, useState } from "react";
import ProductType from "../../../../models/ProductType";
import Order from "../../../../models/Order";
import OrderContext from '../../../../store/OrderContext';
import {
    QuantityControlWrapper,
    ClickableControl,
    QuantityDisplay
} from "./styles";

interface QuantityControlProps {
    productID: string;
    productType: ProductType;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ productID, productType }) => {
    const [order, setOrder] = useContext(OrderContext);
    const [availability, setAvailability] = useState<number>(0);

    useEffect(() => {
        const fetchAvailability = setInterval(() => {
            const fetched = order.availability.getAvailabilityByID(productID);
            if (fetched) setAvailability(fetched);
        }, 200);

        if (availability) clearInterval(fetchAvailability);
    });

    const productTypeOrder = (() => {
        switch (productType.id) {
            case "KITS01": return "kitOrder";
            case "CAKE02": return "cakeOrder";
            case "BROW03": return "brownieOrder";
        }
    })();

    const quantity = order[productTypeOrder].getQuantityOrdered(productID);

    const handleSub = (): void => {
        let newQuantity = quantity - 1;
        if (newQuantity < 0) newQuantity = 0;

        order[productTypeOrder].updateProductQuantity(productID, newQuantity);
        const newOrder = new Order();
        Object.assign(newOrder, order);

        setOrder(newOrder);
    }

    const handleAdd = (): void => {
        let newQuantity = quantity + 1;
        if (!productType.only_pre_ordering && newQuantity > availability) {
            newQuantity = availability;
        }

        order[productTypeOrder].updateProductQuantity(productID, newQuantity);
        const newOrder = new Order();
        Object.assign(newOrder, order);

        setOrder(newOrder);
    }

    const noticeToRemoveOnFinishOrder = (): void => {
        throw new Error("noticeToRemoveOnFinishOrder");
    }

    return (
        <>
            <QuantityControlWrapper>
                <ClickableControl
                    onClick={
                        productType.id === "KITS01"
                        ? noticeToRemoveOnFinishOrder
                        : handleSub
                    }
                >-</ClickableControl>
                    <QuantityDisplay>{quantity}</QuantityDisplay>
                <ClickableControl
                    onClick={
                        productType.id === "KITS01"
                        ? () => {
                            order.kitOrder.addNewBrigadeiroOrder(productID);
                            const newOrder = new Order();
                            Object.assign(newOrder, order);

                            setOrder(newOrder);
                        }
                        : handleAdd
                    }
                >+</ClickableControl>
            </QuantityControlWrapper>
        </>
    )
}

export default QuantityControl;
