const SHEET_ID: string = "1JJePQcZowP0vOfdL5s6-yjHtxpKL-ghEYke4_pxL8-s";
const PAGE: number = 1;
const URL: string = `https://spreadsheets.google.com/feeds/cells/${SHEET_ID}/${PAGE}/public/full?alt=json`;

export default class Availability {
    private quantity: { [productID: string] : number } = {};

    getAvailabilityByID(productID: string): number {
        return this.quantity[productID];
    }

    private fetchQuantity() {
        fetch(URL)
            .then(response => {
                if (!response.ok) throw new Error("Response is not OK");

                return response.json();
            })
            .then(data => {
                const rows = {};
                const entries = data.feed.entry;

                for (const entry of entries) {
                    const row = entry.gs$cell.row;
                    const col = entry.gs$cell.col;

                    if (col == 1) continue;

                    if (!rows[row]) rows[row] = [];
                    rows[row].push(entry.content.$t);
                }

                return rows;
            })
            .then(rows => {
                const IDs = rows["1"];
                const quantities = rows["3"];

                for (let i = 0; i < IDs.length; i++) {
                    this.quantity[IDs[i]] = quantities[i];
                }
            })
            .then(() => {
                console.log("YYAYAY:", this.quantity);
            })
            .catch(error => {
                throw error;
            });
    }

    constructor() {
        this.fetchQuantity();
    }
}
