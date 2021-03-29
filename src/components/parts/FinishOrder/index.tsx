import { useContext } from "react";
import data from "../../../data";
import OrderContext from "../../../store/OrderContext";
import Section from "../../base/Section";

const Finish: React.FC = () => {
    const [order, setOrder] = useContext(OrderContext);

    return (
        <Section>
            {data.product_types.brownie.products.map((brownie) => {
                const quantity = order.brownieOrder.getQuantityOrdered(
                    brownie.id
                );

                return quantity > 0 ? (
                    <h2>
                        {quantity} un. {brownie.name}
                    </h2>
                ) : null;
            })}
            {data.product_types.cake.products.map((cake) => {
                const quantity = order.cakeOrder.getQuantityOrdered(cake.id);

                return quantity > 0 ? (
                    <h2>
                        {quantity} un. {cake.name}
                    </h2>
                ) : null;
            })}
        </Section>
    );
};

export default Finish;
