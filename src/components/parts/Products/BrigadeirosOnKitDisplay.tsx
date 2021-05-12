import React, { useContext, useState } from "react";
import { Collapse } from "react-collapse";
import data from "../../../data";
import Order from "../../../models/Order";
import OrderContext from "../../../store/OrderContext";
import { ClickableControl } from "./QuantityControl/styles";
import { BrigadeirosEnumeration, DeleteIconSVG, Divisor, KitOrderContainer, KitOrderTitle, RemoveConfirmationButton } from "./styles";

interface BrigadeirosOnKitDisplayProps {
    productID: string;
}

const BrigadeirosOnKitDisplay: React.FC<BrigadeirosOnKitDisplayProps> = ({ productID }) => {
    const [order, setOrder] = useContext(OrderContext);

    return (
        <>
            {order.kitOrder.getBrigadeirosOrdered(productID).map((brigadeirosOnKit, index, array) => {
                const [clickedRemove, setClickedRemove] = useState<boolean>(false);

                const removeThisKitOrder = () => {
                    array.splice(index, 1);

                    const newOrder = new Order();
                    Object.assign(newOrder, order);
                    setOrder(newOrder);
                };

                const orderedBrigadeiros: string[] = Object
                    .keys(brigadeirosOnKit.quantityOrdered)
                    .filter(brigadeiroID => brigadeirosOnKit.quantityOrdered[brigadeiroID] > 0)
                    .map(brigadeiroID => data.brigadeiros.find(b => b.id == brigadeiroID).name);

                return (
                    <Collapse isOpened={brigadeirosOnKit.getTotalQuantityOrdered() === brigadeirosOnKit.maxQuantity}>
                        <Divisor style={{ margin: 0, marginTop: index === 0 ? "1rem" : 0 }} />
                        <KitOrderContainer>
                            <KitOrderContainer style={{
                                justifyContent: "unset",
                                padding: 0,
                            }}>
                                <KitOrderTitle>
                                    Kit {index + 1}
                                </KitOrderTitle>
                                <BrigadeirosEnumeration>
                                    {orderedBrigadeiros.join(", ")}
                                </BrigadeirosEnumeration>
                            </KitOrderContainer>
                            {clickedRemove ? (
                                <RemoveConfirmationButton
                                    onClick={removeThisKitOrder}
                                    title="Confirmar e remover"
                                >
                                    Remover
                                </RemoveConfirmationButton>
                            ) : null}
                            <DeleteIconSVG
                                onClick={() => {
                                    setClickedRemove(!clickedRemove);
                                }}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <title>
                                    {clickedRemove ? "Cancelar e não remover" : "Remover Kit"}
                                </title>
                                <path
                                    d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"
                                ></path>
                            </DeleteIconSVG>
                        </KitOrderContainer>
                    </Collapse>
                );
            })}
        </>
    )
};

export default BrigadeirosOnKitDisplay;
