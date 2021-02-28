// @ts-ignore
import { product_types } from '../content.yaml';
import SimpleOrder from "./SimpleOrder";

const cakeTypeInfo = product_types.cake;

export default class CakeOrder extends SimpleOrder {
    constructor() {
        super(cakeTypeInfo);
    }
}
