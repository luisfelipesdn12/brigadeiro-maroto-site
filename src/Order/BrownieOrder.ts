// @ts-ignore
import { product_types } from '../content.yaml';
import SimpleOrder from "./SimpleOrder";

const browniwTypeInfo = product_types.brownie;

export default class Brownie extends SimpleOrder {
    constructor() {
        super(browniwTypeInfo);
    }
}
