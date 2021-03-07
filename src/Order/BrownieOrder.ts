import data from '../data';
import SimpleOrder from "./SimpleOrder";

const browniwTypeInfo = data.product_types.brownie;

export default class Brownie extends SimpleOrder {
    constructor() {
        super(browniwTypeInfo);
    }
}
