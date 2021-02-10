import { Dispatch, SetStateAction } from "react";
import {
    QuantityControlWrapper,
    ClickableControl,
    QuantityDisplay
} from "./styles";

interface QuantityControlProps {
    productID: string;
    order: { [productID: string]: number };
    setOrder: Dispatch<SetStateAction<{
        [productID: string]: number;
    }>>;
}

const QuantityControl: React.FC<QuantityControlProps> = ({ productID, order, setOrder }) => {
    const quantity: number = order[productID];

    const handleSub = (): void => {
        let newQuantity = quantity - 1;
        if (newQuantity < 0) newQuantity = 0;

        setOrder(order => {
            order[productID] = newQuantity;
            return order;
        });

        console.log(order);
    }

    const handleAdd = (): void => {
        let newQuantity = quantity + 1;
        if (newQuantity > 20) newQuantity = 20;

        setOrder(order => {
            order[productID] = newQuantity;
            return order;
        });

        console.log(order);
    }

    return (
        <>
            <QuantityControlWrapper>
                <ClickableControl
                    onClick={handleSub}
                >-</ClickableControl>
                    <QuantityDisplay>{quantity}</QuantityDisplay>
                <ClickableControl
                    onClick={handleAdd}
                >+</ClickableControl>
            </QuantityControlWrapper>
        </>
    )
}

export default QuantityControl;
