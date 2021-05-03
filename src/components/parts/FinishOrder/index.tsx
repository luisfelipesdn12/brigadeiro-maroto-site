import React, { useContext, useState } from "react";
import data from "../../../data";
import Order from "../../../models/Order";
import OrderContext from "../../../store/OrderContext";
import priceFormat from "../../../utils/priceFormat";
import returnCleanNumber from "../../../utils/returnCleanNumber";
import Button from "../../base/Button";
import { ButtonContainer } from "../../base/Button/styles";
import Description from "../../base/Description";
import Section from "../../base/Section";
import Title from "../../base/Title";
import FinalWishList from "./FinalWishList";
import ShippingOption from "./ShippingOption";
import TotalPrice from "./TotalPrice";

const FinishOrder: React.FC = () => {
    const [order, setOrder] = useContext(OrderContext);

    const getWhatsAppURL = (): string => {
        let hasOrders: boolean = false;
        let message: string = "Olá, Douglas! Eu vim pelo site e gostaria de fazer um pedido.\n";

        for (const productOrder of [order.kitOrder, order.brownieOrder, order.cakeOrder]) {
            let totalOrderedForThisProductType: number = 0;
            let productTypeMessageSection: string = `\n${productOrder.productTypeInfo.name}\n`

            for (const product of productOrder.productTypeInfo.products) {
                const quantityOrdered = productOrder.getQuantityOrdered(product.id);
                totalOrderedForThisProductType += quantityOrdered;

                if (quantityOrdered > 0) {
                    productTypeMessageSection += `${quantityOrdered} un. ${product.name}\n`;
                }
            }

            if (totalOrderedForThisProductType > 0) {
                message += productTypeMessageSection;
                hasOrders = true;
            }
        }

        if (order.includeShipping) {
            message += "\nGostaria de incluir a entrega\n";
        }

        if (hasOrders) {
            message += `\nTotal: ${priceFormat(order.getTotalPrice())}`;
        }

        return encodeURI(`https://wa.me/${returnCleanNumber(data.contact.phone_number)}/?text=` + message);;
    }

    const sendButtonIsDisabled = (): boolean => {
        let totalOrdered = 0;

        for (const productOrder of [order.kitOrder, order.brownieOrder, order.cakeOrder]) {
            for (const product of productOrder.productTypeInfo.products) {
                totalOrdered += productOrder.getQuantityOrdered(product.id);
            }
        }

        return ! (totalOrdered > 0);
    }

    return (
        <Section
            bgColor="rgba(123,52,30,0.25)"
            paddingTop="3rem"
            paddingBottom="5rem"
            paddingLeft=".75rem"
            paddingRight=".75rem"
            textAlign="left"
        >
            <Title
                content="Finalize seu pedido!"
                color="#744210"
                textAlign="left"
            />
            <Description
                content="Clique para adicionar ou remover sabores e envie seu pedido automaticamente pelo WhatsApp!"
            />
            <FinalWishList />
            <ShippingOption
                handleChange={(_e) => {
                    order.includeShipping = !order.includeShipping;

                    const newOrder = new Order();
                    Object.assign(newOrder, order);
                    setOrder(newOrder);
                }}
            />
            <TotalPrice />
            <ButtonContainer>
                <Button
                    label="Enviar Pedido"
                    handleClick={() => open(getWhatsAppURL(), '_blank')}
                    isDisabled={sendButtonIsDisabled()}
                />
            </ButtonContainer>
        </Section>
    )
}

export default FinishOrder;
