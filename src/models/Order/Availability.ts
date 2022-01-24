export default class Availability {
    private quantity: { [productID: string]: number } = {};

    getAvailabilityByID(productID: string): number {
        return this.quantity[productID];
    }

    private fetchQuantity() {
        fetch("/api/spreadsheet")
            .then((response) => {
                if (!response.ok) throw new Error("Response is not OK");

                return response.json();
            })
            .then((data) => {
                const rows = {};
                const rowsFields: any[] = data.sheets[0].data[0].rowData;

                for (let row = 1; row <= rowsFields.length; row++) {
                    const values = rowsFields[row - 1].values;

                    for (const value of values) {
                        const text = value.formattedValue;
                        if (!rows[row]) rows[row] = [];
                        rows[row].push(text);
                    }
                }

                return rows;
            })
            .then((rows) => {
                const IDs = rows["1"];
                const quantities = rows["3"];

                for (let i = 0; i < IDs.length; i++) {
                    this.quantity[IDs[i]] = quantities[i];
                }
            })
            .catch((error) => {
                throw error;
            });
    }

    constructor() {
        this.fetchQuantity();
    }
}
