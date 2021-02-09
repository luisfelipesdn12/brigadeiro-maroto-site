import { useState } from "react";
import priceFormat from "../../../utils/priceFormat";
import { ProductShape } from "../Products/Product";
import { TotalPriceInfo, TotalPriceLabel, TotalPriceWrapper } from "./styles";

interface TotalPriceProps {
    products: ProductShape[];
    order: { [productID: string]: number };
    includeShipping: boolean;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ products, order, includeShipping }) => {
    const getFinalValue = (): number => {
        let finalValue: number = 0;

        for (let productID of Object.keys(order)) {
            finalValue += (
                order[productID]
                * products.find(p => p.id === productID).price
            );
        }

        if (includeShipping) finalValue += 2;

        return finalValue;
    }

    return (
        <TotalPriceWrapper>
            <TotalPriceLabel>Total:</TotalPriceLabel>
            <TotalPriceInfo>
                {priceFormat(getFinalValue())}
            </TotalPriceInfo>
        </TotalPriceWrapper>
    )
}

export default TotalPrice;
