import data from "../../data";

export class MaximumQuantityBeated extends Error {}

export default class BrigadeiroOrder {
    readonly quantityOrdered: { [productID: string]: number } = {};
    maxQuantity: number;

    public getQuantityOrdered(brigadeiroID: string): number {
        return this.quantityOrdered[brigadeiroID];
    }

    public getTotalQuantityOrdered(): number {
        let totalQuantity = 0;
        for (const productID in this.quantityOrdered) {
            if (
                Object.prototype.hasOwnProperty.call(
                    this.quantityOrdered,
                    productID
                )
            ) {
                totalQuantity += this.getQuantityOrdered(productID);
            }
        }

        return totalQuantity;
    }

    public updateProductQuantity(
        brigadeiroID: string,
        newQuantity: number
    ): void {
        let totalQuantity = 0;
        for (const productID in this.quantityOrdered) {
            if (
                Object.prototype.hasOwnProperty.call(
                    this.quantityOrdered,
                    productID
                )
            ) {
                if (productID === brigadeiroID) {
                    totalQuantity += newQuantity;
                } else {
                    totalQuantity += this.getQuantityOrdered(productID);
                }
            }
        }

        if (totalQuantity > this.maxQuantity) {
            throw new MaximumQuantityBeated(
                `Cannot update product (${brigadeiroID}) quantity, because it would make the total quantity of products ${totalQuantity}, but the maximus is ${this.maxQuantity}`
            );
        } else {
            this.quantityOrdered[brigadeiroID] = newQuantity;
        }
    }

    constructor(maxQuantity: number) {
        this.maxQuantity = maxQuantity;

        for (const brigadeiro of data.brigadeiros) {
            this.quantityOrdered[brigadeiro.id] = 0;
        }
    }
}
