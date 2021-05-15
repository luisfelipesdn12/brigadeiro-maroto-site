import ProductType from "../ProductType";

export default class SimpleOrder {
    readonly productTypeInfo: ProductType;
    private quantityOrdered: { [productID: string]: number } = {};

    public updateProductQuantity(productID: string, newQuantity: number): void {
        this.quantityOrdered[productID] = newQuantity;
    }

    public getQuantityOrdered(productID: string): number {
        return this.quantityOrdered[productID];
    }

    /**
     * Generates a description of the order with
     * identificators and quantities.
     *
     * @param productID The ID of the project
     * @returns The decrition to be inserted on message.
     */
    public getMessageDescription(productID: string): string {
        const quantity = this.getQuantityOrdered(productID);
        const name = this.productTypeInfo.products
            .find(product => product.id == productID)?.name;

        return `${quantity} un. ${name}\n`;
    }

    constructor(productTypeInfo: ProductType) {
        this.productTypeInfo = productTypeInfo;

        for (const product of this.productTypeInfo.products) {
            this.quantityOrdered[product.id] = 0;
        }
    }
}
