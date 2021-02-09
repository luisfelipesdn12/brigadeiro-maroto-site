import Section from "../../base/Section";
import Button from "../../base/Button";
import { ButtonContainer } from "../../base/Button/styles";
import { Sentence } from "./styles";
import { data } from "../../../../pages/_app";

const PreOrder: React.FC = () => {
    return(
        <Section
            paddingTop="4rem"
            paddingBottom="4rem"
            paddingLeft=".75rem"
            paddingRight=".75rem"
        >
            <Sentence>
                Quer <strong>pedidos maiores</strong>? Seu <strong>sabor não está disponível</strong>? Quer <strong>fazer uma festa</strong> com brigadeiros marotos?
            </Sentence>
            <ButtonContainer>
                <Button
                    label="Faça uma encomenda!"
                    handleClick={() => open(`https://wa.me/${data.contact.phone_number}/?text=${encodeURIComponent("Olá, Douglas! Eu vim pelo site e gostaria de fazer uma encomenda.")}`, "_blank")}
                />
            </ButtonContainer>
        </Section>
    )
}

export default PreOrder;
