import { Collapse } from "react-collapse";
import data from "../../../../../data";
import { Divisor } from "../../styles";
import BrigadeiroOption from "./BrigadeiroOption";

const BrigadeiroSelector: React.FC<{ display: boolean }> = ({ display }) => {
    return (
        <Collapse isOpened={display}>
            {data.brigadeiros.map((brigadeiro) => {
                return <BrigadeiroOption brigadeiro={brigadeiro} />;
            })}
            <Divisor />
        </Collapse>
    );
};

export default BrigadeiroSelector;
