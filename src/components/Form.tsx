import { useContext } from "react"
import Order from "../Order";
import OrderContext from "../store/OrderContext"

export default function Form() {
    const [order, setOrder] = useContext(OrderContext);

    return (
        <input
            placeholder={"yay"}
            onChange={(e) => {
                order.brownieOrder.updateProductQuantity("BROW1", e.currentTarget?.value?.length);

                const newOrder = new Order();
                Object.assign(newOrder, order);

                setOrder(newOrder);
            }}
        ></input>
    )
}
