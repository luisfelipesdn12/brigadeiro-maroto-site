import React, { useContext } from "react";
import OrderContext from "../../../store/OrderContext";
import priceFormat from "../../../utils/priceFormat";
import { TotalPriceInfo, TotalPriceLabel, TotalPriceWrapper } from "./styles";

const TotalPrice: React.FC = () => {
    const [order, setOrder] = useContext(OrderContext);

    return (
        <TotalPriceWrapper>
            <TotalPriceLabel>Total:</TotalPriceLabel>
            <TotalPriceInfo>
                {priceFormat(order.getTotalPrice())}
            </TotalPriceInfo>
        </TotalPriceWrapper>
    );
}

export default TotalPrice;
