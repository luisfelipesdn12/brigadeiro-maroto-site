interface GoogleAPIRow {
    values: {
        formattedValue: string;
        effectiveValue: {
            stringValue?: string;
            numberValue?: number;
        };
    }[];
}

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
                const rows: GoogleAPIRow[] = data.sheets[0].data[0].rowData;

                rows.forEach((row, i) => {
                    // Ignores the first row
                    if (i === 0) return;

                    const id = row.values[0].effectiveValue.stringValue;
                    const quantity = row.values[2].effectiveValue.numberValue;

                    this.quantity[id] = quantity;
                });
            })
            .catch((error) => {
                throw error;
            });
    }

    constructor() {
        this.fetchQuantity();
    }
}
