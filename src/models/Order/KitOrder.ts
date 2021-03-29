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

    public updateProductQuantity(
        _productID: string,
        _newQuantity: number
    ): void {
        throw new Error("Not a valid method for kitOrder");
    }

    constructor() {
        this.productTypeInfo = data.product_types.kit;

        for (const product of this.productTypeInfo.products) {
            this.quantityOrdered[product.id] = [];
        }
    }
}
