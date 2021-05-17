import { FormFields } from "../../components/parts/FinishOrder/OrderRequiredInformationForm";
import data from "../../data";
import Availability from "./Availability";
import BrownieOrder from "./BrownieOrder";
import CakeOrder from "./CakeOrder";
import KitOrder from "./KitOrder";

export default class Order {
    includeShipping: boolean = false;
    finishOrderFormFields: FormFields;
    availability: Availability = new Availability();

    kitOrder: KitOrder = new KitOrder();
    brownieOrder: BrownieOrder = new BrownieOrder();
    cakeOrder: CakeOrder = new CakeOrder();

    getTotalPrice(): number {
        let finalValue: number = 0;

        for (const productOrder of [
            this.kitOrder,
            this.brownieOrder,
            this.cakeOrder,
        ]) {
            for (const product of productOrder.productTypeInfo.products) {
                finalValue +=
                    productOrder.getQuantityOrdered(product.id) * product.price;
            }
        }

        return finalValue;
    }
}
