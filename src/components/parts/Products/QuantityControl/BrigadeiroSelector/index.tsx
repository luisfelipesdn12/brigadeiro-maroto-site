import { Collapse } from "react-collapse";
import data from "../../../../../data";
import { Divisor } from "../../styles";
import BrigadeiroOption from "./BrigadeiroOption";

interface BrigadeiroSelectorProps {
    kitID: string;
    display: boolean;
}

const BrigadeiroSelector: React.FC<BrigadeiroSelectorProps> = ({
    kitID,
    display,
}) => {
    return (
        <Collapse isOpened={display}>
            {data.brigadeiros.map((brigadeiro) => {
                return (
                    <BrigadeiroOption
                        kitID={kitID}
                        brigadeiro={brigadeiro}
                        key={brigadeiro.id}
                    />
                );
            })}
            <Divisor />
        </Collapse>
    );
};

export default BrigadeiroSelector;
