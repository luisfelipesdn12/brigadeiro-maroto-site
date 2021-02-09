import { useState } from "react";
import Button from "../../base/Button";
import { ButtonContainer } from "../../base/Button/styles";
import Description from "../../base/Description";
import Section from "../../base/Section";
import Title from "../../base/Title";
import { ProductShape } from "../Products/Product";
import FinalWishList from "./FinalWishList";
import ShippingOption from "./ShippingOption";
import TotalPrice from "./TotalPrice";

interface FinishOrdertProps {
    products: ProductShape[];
    order: { [productID: string]: number };
}

const FinishOrder: React.FC<FinishOrdertProps> = ({ products, order }) => {
    const [includeShipping, setIncludeShipping] = useState<boolean>(false);

    const getWhatsAppURL = (): string => {
        return "https://duckduckgo.com";
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
            <FinalWishList
                products={products}
                order={order}
            />
            <ShippingOption
                handleChange={(_e) => setIncludeShipping(includeShipping ? false : true)}
            />
            <TotalPrice
                products={products}
                order={order}
                includeShipping={includeShipping}
            />
            <ButtonContainer>
                <Button
                    label="Enviar Pedido"
                    handleClick={() => open(getWhatsAppURL(), '_blank')}
                    isDisabled={Object.entries(order).length === 0}
                />
            </ButtonContainer>
        </Section>
    )
}

export default FinishOrder;
