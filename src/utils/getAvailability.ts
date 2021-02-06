const SHEET_ID: string = "1JJePQcZowP0vOfdL5s6-yjHtxpKL-ghEYke4_pxL8-s";
const PAGE: number = 1;
const URL: string = `https://spreadsheets.google.com/feeds/cells/${SHEET_ID}/${PAGE}/public/full?alt=json`;

/**
 * getAvailability get the spreadsheet
 * data as JSON and returns a object with
 * flavour ID as key and the availability
 * as value.
 * @returns quantity The object with
 * flavour ID as key and the availability
 * as value.
 */
const getAvailability = async (): Promise<{ [key: string] : number }> => {
    const quantity: { [key: string] : number } = {};

    await fetch(URL)
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
                quantity[IDs[i]] = quantities[i];
            }
        })
        .catch(error => {
            throw error;
        });

    return quantity;
}

export default getAvailability;
