import Product from "../../../../../models/Product";
import {
    BrigadeiroOptionWrapper,
    BrigadeiroPicture,
    BrigadeiroName,
    BrigadeiroInformation,
    BrigadeiroDescription,
} from "./styles";

const BrigadeiroOption: React.FC<{
    brigadeiro: Product;
}> = ({ brigadeiro }) => {
    return (
        <BrigadeiroOptionWrapper>
            <BrigadeiroPicture src={brigadeiro.image_url} />
            <BrigadeiroInformation>
                <BrigadeiroName>{brigadeiro.name}</BrigadeiroName>
                <BrigadeiroDescription>
                    {brigadeiro.description}
                </BrigadeiroDescription>
            </BrigadeiroInformation>
        </BrigadeiroOptionWrapper>
    );
};

export default BrigadeiroOption;
