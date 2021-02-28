import { useContext } from "react"
import Order from "../Order";
import OrderContext from "../store/OrderContext"

export default function Form() {
    const [order, setOrder] = useContext(OrderContext);

    return (
        <input
            placeholder={"yay"}
            onChange={(e) => {
                order.setDummy(e.currentTarget.value);

                const newOrder = new Order()
                Object.assign(newOrder, order);

                setOrder(newOrder);
            }}
        ></input>
    )
}
