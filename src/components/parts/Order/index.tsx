import Section from "../../base/Section";
import { Sentence } from "./styles";

/*
    <p class="mb-6 text-gray-900 text-left text-xl">
        Quer <strong>pedidos maiores</strong>? Seu <strong>sabor não está disponível</strong>? Quer <strong>fazer uma festa</strong> com brigadeiros marotos?
    </p>
    <div class="flex">
        <a id="pre-order-button" class="bg-orange-900 bg-opacity-25 text-center rounded-lg border-2 border-b-4 border-gray-900 w-full md:w-auto mx-auto md:m-0 text-xl text-gray-900 font-bold shadow py-3 md:py-2 md:px-6 uppercase" href="javascript:preOrder()">
            <span class="select-none">
                Faça uma encomenda!
            </span>
        </a>
    </div>
*/


const Order: React.FC = () => {
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
        </Section>
    )
}

export default Order;
