import React, { useContext } from "react";
import data from "../../../data";
import OrderContext from "../../../store/OrderContext";
import { BrigadeirosEnumeration, Divisor, KitOrderContainer, KitOrderTitle } from "./styles";

interface BrigadeirosOnKitDisplayProps {
    productID: string;
}

const BrigadeirosOnKitDisplay: React.FC<BrigadeirosOnKitDisplayProps> = ({ productID }) => {
    const [order, setOrder] = useContext(OrderContext);

    return (
        <>
            {order.kitOrder.getBrigadeirosOrdered(productID).map((brigadeirosOrdered, index) => {
                const orderedBrigadeiros: string[] = Object
                    .keys(brigadeirosOrdered.quantityOrdered)
                    .filter(brigadeiroID => brigadeirosOrdered.quantityOrdered[brigadeiroID] > 0)
                    .map(brigadeiroID => data.brigadeiros.find(b => b.id == brigadeiroID).name);

                return orderedBrigadeiros.length > 0 ? (
                    <>
                        <Divisor style={{ margin: 0 }} />
                        <KitOrderContainer >
                            <KitOrderTitle>
                                Kit {index + 1}
                            </KitOrderTitle>
                            <BrigadeirosEnumeration>
                                {orderedBrigadeiros.join(", ")}
                            </BrigadeirosEnumeration>
                        </KitOrderContainer>
                    </>
                ) : null;
            })}
        </>
    )
};

export default BrigadeirosOnKitDisplay;
