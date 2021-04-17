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

interface BrigadeiroOptionProps {
    kitID: string;
    brigadeiro: Product;
}

const BrigadeiroOption: React.FC<BrigadeiroOptionProps> = ({
    kitID,
    brigadeiro,
}) => {
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
                <BrigadeiroQuantityControl
                    kitID={kitID}
                    brigadeiroID={brigadeiro.id}
                />
            </BrigadeiroInformationAndControl>
        </BrigadeiroOptionWrapper>
    );
};

export default BrigadeiroOption;
