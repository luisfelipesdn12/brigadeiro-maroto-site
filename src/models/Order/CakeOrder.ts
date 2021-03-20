import data from '../../data';
import SimpleOrder from "./SimpleOrder";

const cakeTypeInfo = data.product_types.cake;

export default class CakeOrder extends SimpleOrder {
    constructor() {
        super(cakeTypeInfo);
    }
}
