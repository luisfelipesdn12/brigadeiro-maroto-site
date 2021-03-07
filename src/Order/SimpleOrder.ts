import ProductType from "../models/ProductType";

export default class SimpleOrder {
    readonly productTypeInfo: ProductType;
    private quantityOrdered: { [productID: string]: number } = {};

    public updateProductQuantity(productID: string, newQuantity: number): void {
        this.quantityOrdered[productID] = newQuantity;
    }

    public getQuantityOrdered(productID: string): number {
        return this.quantityOrdered[productID];
    }

    constructor(productTypeInfo: ProductType) {
        this.productTypeInfo = productTypeInfo;

        for (const product of this.productTypeInfo.products) {
            this.quantityOrdered[product.id] = 0;
        }
    }
}
