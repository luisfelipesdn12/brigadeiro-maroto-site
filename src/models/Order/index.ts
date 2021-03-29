import Availability from "./Availability";
import BrownieOrder from "./BrownieOrder";
import CakeOrder from "./CakeOrder";
import KitOrder from "./KitOrder";

export default class Order {
    availability: Availability = new Availability();

    kitOrder: KitOrder = new KitOrder();
    brownieOrder: BrownieOrder = new BrownieOrder();
    cakeOrder: CakeOrder = new CakeOrder();
}
