const SHEET_ID = "1JJePQcZowP0vOfdL5s6-yjHtxpKL-ghEYke4_pxL8-s";
const PAGE = "1";
const URL = `https://spreadsheets.google.com/feeds/cells/${SHEET_ID}/${PAGE}/public/full?alt=json`

/**
 * getQuantity get the spreadsheet data
 * as JSON and returns a object with 
 * flavour ID as key and the availability
 * as value.
 * @returns {object} quantity The object with 
 * flavour ID as key and the availability
 * as value.
 */
export async function getQuantity() {
    const quantity = {};

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

            console.log(quantity);
        })
        .catch(error => {
            throw error;
        });
    
    return quantity;
}
