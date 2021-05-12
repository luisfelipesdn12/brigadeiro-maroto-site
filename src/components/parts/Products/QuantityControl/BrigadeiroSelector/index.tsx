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
            <div style={{ padding: "1rem 0" }}>
                {data.brigadeiros.map((brigadeiro, index) => {
                    return (
                        <>
                            {index !== 0 ? (
                                <Divisor style={{ opacity: "0.5" }} />
                            ) : null}
                            <BrigadeiroOption
                                kitID={kitID}
                                brigadeiro={brigadeiro}
                                key={brigadeiro.id}
                            />
                        </>
                    );
                })}
            </div>
        </Collapse>
    );
};

export default BrigadeiroSelector;
