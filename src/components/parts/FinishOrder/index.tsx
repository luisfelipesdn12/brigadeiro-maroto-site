import React, { useContext, useRef, useState } from "react";
import { Collapse } from "react-collapse";
import data from "../../../data";
import Order from "../../../models/Order";
import KitOrder from "../../../models/Order/KitOrder";
import OrderContext from "../../../store/OrderContext";
import priceFormat from "../../../utils/priceFormat";
import returnCleanNumber from "../../../utils/returnCleanNumber";
import Button from "../../base/Button";
import { ButtonContainer } from "../../base/Button/styles";
import Description from "../../base/Description";
import Section from "../../base/Section";
import Title from "../../base/Title";
import FinalWishList from "./FinalWishList";
import OrderRequiredInformationForm from "./OrderRequiredInformationForm";
import ShippingOption from "./ShippingOption";
import TotalPrice from "./TotalPrice";

const FinishOrder: React.FC = () => {
    const [order, setOrder] = useContext(OrderContext);

    const [includeShippingHook, setIncludeShippingHook] = useState<boolean>(
        false
    );
    const [isFormFull, setIsFormFull] = useState<boolean>(false);

    const getWhatsAppURL = (): string => {
        let hasOrders: boolean = false;
        let message: string = `Olá! Meu nome é ${order.finishOrderFormFields.name}, eu vim pelo site e gostaria de fazer um pedido.\n`;

        // For each kind of order:
        for (const productOrder of [
            order.kitOrder,
            order.brownieOrder,
            order.cakeOrder,
        ]) {
            let totalOrderedForThisProductType: number = 0;

            /**
             * The section of the message who
             * stores the information about
             * the current product type.
             *
             * Starts with the product type name
             * and may or not be included on the
             * final message dependent if there
             * are orders for some product of the type.
             */
            let productTypeMessageSection: string = `\n*${productOrder.productTypeInfo.name}*\n`;

            // For each product of this product type:
            for (const product of productOrder.productTypeInfo.products) {
                const quantityOrdered = productOrder.getQuantityOrdered(
                    product.id
                );
                totalOrderedForThisProductType += quantityOrdered;

                if (quantityOrdered > 0)
                    productTypeMessageSection += productOrder.getMessageDescription(
                        product.id
                    );
            }

            // Only if the product type has orders
            // append it to the inal message.
            if (totalOrderedForThisProductType > 0) {
                message += productTypeMessageSection;
                hasOrders = true;
            }
        }

        if (order.includeShipping) {
            message += "\nGostaria de incluir a entrega\n";
            message += `${order.finishOrderFormFields.street}, ${order.finishOrderFormFields.streetNumber} - ${order.finishOrderFormFields.neighborhood} - ${order.finishOrderFormFields.city} - ${order.finishOrderFormFields.CEP}\n`;
        }

        if (hasOrders) {
            message += `\nTotal: ${priceFormat(order.getTotalPrice())}`;
        }

        console.log(process.env.NODE_ENV === "development" ? message : null);

        return encodeURI(
            `https://wa.me/${returnCleanNumber(
                data.contact.phone_number
            )}/?text=` + message
        );
    };

    const sendButtonIsDisabled = (): boolean => {
        let totalOrdered = 0;

        for (const productOrder of [
            order.kitOrder,
            order.brownieOrder,
            order.cakeOrder,
        ]) {
            for (const product of productOrder.productTypeInfo.products) {
                totalOrdered += productOrder.getQuantityOrdered(product.id);
            }
        }

        return totalOrdered <= 0 || !isFormFull;
    };

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
            <Description content="Clique para adicionar ou remover sabores e envie seu pedido automaticamente pelo WhatsApp!" />
            <FinalWishList />
            <ShippingOption
                handleChange={() => {
                    order.includeShipping = !order.includeShipping;
                    setIncludeShippingHook(!includeShippingHook);

                    const newOrder = new Order();
                    Object.assign(newOrder, order);
                    setOrder(newOrder);
                }}
            />
            <TotalPrice />
            <OrderRequiredInformationForm
                setIsFormFull={setIsFormFull}
                includeShippingHook={includeShippingHook}
            />
            <ButtonContainer>
                <Button
                    label="Enviar Pedido"
                    handleClick={() => open(getWhatsAppURL(), "_blank")}
                    isDisabled={sendButtonIsDisabled()}
                />
            </ButtonContainer>
        </Section>
    );
};

export default FinishOrder;
