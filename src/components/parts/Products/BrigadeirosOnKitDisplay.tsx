import { useContext } from "react";
import OrderContext from "../../../store/OrderContext";

interface BrigadeirosOnKitDisplayProps {
    productID: string;
}

const BrigadeirosOnKitDisplay: React.FC<BrigadeirosOnKitDisplayProps> = ({ productID }) => {
    const [order, setOrder] = useContext(OrderContext);

    return (
        <>
            <p>{JSON.stringify(order.kitOrder.getBrigadeirosOrdered(productID))}</p>
        </>
    )
};

export default BrigadeirosOnKitDisplay;
