import Product from "../../../../../models/Product";
import BrigadeiroQuantityControl from "./BrigadeiroQuantityControl";
import {
    BrigadeiroOptionWrapper,
    BrigadeiroPicture,
    BrigadeiroName,
    BrigadeiroInformation,
    BrigadeiroDescription,
    BrigadeiroInformationAndControl,
} from "./styles";

const BrigadeiroOption: React.FC<{
    brigadeiro: Product;
}> = ({ brigadeiro }) => {
    return (
        <BrigadeiroOptionWrapper>
            <BrigadeiroPicture src={brigadeiro.image_url} />
            <BrigadeiroInformationAndControl>
                <BrigadeiroInformation>
                    <BrigadeiroName>{brigadeiro.name}</BrigadeiroName>
                    <BrigadeiroDescription>
                        {brigadeiro.description}
                    </BrigadeiroDescription>
                </BrigadeiroInformation>
                <BrigadeiroQuantityControl />
            </BrigadeiroInformationAndControl>
        </BrigadeiroOptionWrapper>
    );
};

export default BrigadeiroOption;
