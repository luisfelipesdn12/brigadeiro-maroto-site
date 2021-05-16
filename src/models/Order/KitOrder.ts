import data from "../../data";
import ProductType from "../ProductType";
import BrigadeiroOrder from "./BrigadeiroOrder";

export default class KitOrder {
    readonly productTypeInfo: ProductType;
    private quantityOrdered: { [productID: string]: BrigadeiroOrder[] } = {};

    public updateBrigadeirosOrdered(
        productID: string,
        newBrigadeiroOrders: BrigadeiroOrder[]
    ) {
        this.quantityOrdered[productID] = newBrigadeiroOrders;
    }

    public getBrigadeirosOrdered(productID: string): BrigadeiroOrder[] {
        return this.quantityOrdered[productID];
    }

    /**
     * Generates a description of the order with
     * identificators and quantities.
     *
     * In the case of a kit, describe also the
     * brigadeiros chosen.
     *
     * @param productID The ID of the project
     * @returns The decrition to be inserted on message.
     */
    public getMessageDescription(productID: string): string {
        let result = "";

        const quantity = this.getQuantityOrdered(productID);
        const name = this.productTypeInfo.products.find(
            (product) => product.id == productID
        )?.name;

        const brigadeiroOrdersFromThisKit = this.getBrigadeirosOrdered(
            productID
        );

        result += `${quantity} un. ${name}\n`;

        for (let i = 0; i < brigadeiroOrdersFromThisKit.length; i++) {
            const brigadeiroOrder = brigadeiroOrdersFromThisKit[i];
            result += `\t\t- Kit ${i + 1}:\n`;

            for (const brigadeiro of data.brigadeiros) {
                const brigadeiroQuantityOrdered = brigadeiroOrder.getQuantityOrdered(
                    brigadeiro.id
                );

                if (brigadeiroQuantityOrdered > 0) {
                    result += `\t\t\t\t${brigadeiroQuantityOrdered} un. Brigadeiro ${brigadeiro.name}\n`;
                }
            }

            result += `\n`;
        }

        return result;
    }

    public getQuantityOrdered(productID: string): number {
        return this.quantityOrdered[productID]?.length;
    }

    public addNewBrigadeiroOrder(productID: string): void {
        const maxQuantityForThisKit = this.productTypeInfo.products.find(
            (product) => product.id === productID
        )?.quantity_on_kit;

        this.quantityOrdered[productID]?.push(
            new BrigadeiroOrder(maxQuantityForThisKit)
        );
    }

    public cancelLastBrigadeiroOrder(productID: string): void {
        this.quantityOrdered[productID].pop();
    }

    public isLastBrigadeiroOrderFull(
        productID: string,
        defaultReturn: boolean = true
    ): boolean {
        const lastBrigadeiroOrder: BrigadeiroOrder = this.quantityOrdered[
            productID
        ][this.quantityOrdered[productID].length - 1];

        if (lastBrigadeiroOrder) {
            return (
                lastBrigadeiroOrder.getTotalQuantityOrdered() ===
                lastBrigadeiroOrder.maxQuantity
            );
        } else {
            return defaultReturn;
        }
    }

    constructor() {
        this.productTypeInfo = data.product_types.kit;

        for (const product of this.productTypeInfo.products) {
            this.quantityOrdered[product.id] = [];
        }
    }
}
