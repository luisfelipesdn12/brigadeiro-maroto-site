import BrownieOrder from "./BrownieOrder";
import CakeOrder from "./CakeOrder";
import KitOrder from "./KitOrder";

export default class Order {
    kitOrder: KitOrder = new KitOrder();
    brownietOrder: BrownieOrder = new BrownieOrder();
    caketOrder: CakeOrder = new CakeOrder();

    dummyValue: string = "indefined";

    public setDummy(n: string) {
        this.dummyValue = n;
    }
}
