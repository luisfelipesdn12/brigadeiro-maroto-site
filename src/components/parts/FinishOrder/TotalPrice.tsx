import React, { useContext } from "react";
import data from "../../../data";
import OrderContext from "../../../store/OrderContext";
import priceFormat from "../../../utils/priceFormat";
import { TotalPriceInfo, TotalPriceLabel, TotalPriceWrapper } from "./styles";

interface TotalPriceProps {
    includeShipping: boolean;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ includeShipping }) => {
    const [order, setOrder] = useContext(OrderContext);

    const getFinalValue = (): number => {
        let finalValue: number = 0;

        for (const productOrder of [order.kitOrder, order.brownieOrder, order.cakeOrder]) {
            for (const product of productOrder.productTypeInfo.products) {
                finalValue += productOrder.getQuantityOrdered(product.id) * product.price;
            }
        }

        if (includeShipping) finalValue += data.shipping_price;

        return finalValue;
    }

    return (
        <TotalPriceWrapper>
            <TotalPriceLabel>Total:</TotalPriceLabel>
            <TotalPriceInfo>
                {priceFormat(getFinalValue())}
            </TotalPriceInfo>
        </TotalPriceWrapper>
    );
}

export default TotalPrice;
