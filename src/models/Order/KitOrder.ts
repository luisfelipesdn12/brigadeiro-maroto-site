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

    public isLastBrigadeiroOrderFull(productID: string, defaultReturn: boolean = true): boolean {
        const lastBrigadeiroOrder: BrigadeiroOrder = this.quantityOrdered[productID][
            this.quantityOrdered[productID].length - 1
        ];

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
