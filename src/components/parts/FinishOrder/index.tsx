import React, { useContext, useState } from "react";
import OrderContext from "../../../store/OrderContext";
import Button from "../../base/Button";
import { ButtonContainer } from "../../base/Button/styles";
import Description from "../../base/Description";
import Section from "../../base/Section";
import Title from "../../base/Title";
import FinalWishList from "./FinalWishList";
import ShippingOption from "./ShippingOption";
import TotalPrice from "./TotalPrice";

const FinishOrder: React.FC = () => {
    const [includeShipping, setIncludeShipping] = useState<boolean>(false);

    const [order, setOrder] = useContext(OrderContext);

    const getWhatsAppURL = (): string => {
        return "https://duckduckgo.com";
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
                handleChange={(_e) => setIncludeShipping(!includeShipping)}
            />
            <TotalPrice
                includeShipping={includeShipping}
            />
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
