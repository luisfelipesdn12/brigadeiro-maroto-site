import { flavors } from "./utils.js";
import * as utils from './utils.js';
import { getQuantity } from "../data/spreadsheet.js";

const ORDER = {};
for (const flavor of flavors) ORDER[flavor.id] = 0;

document.getElementById("shipping-option").onchange = (ev) => {
    utils.updateTotalPrice(ORDER);
    utils.updateSendButton(ORDER);
}

async function fill() {
    // Object with flavour ID as key and the
    // availability as value.
    const quantity = await getQuantity();
    
    utils.fillBrigadeirosList(ORDER, quantity);
    utils.fillBrowniesList(ORDER, quantity);
    utils.fillCakesList(ORDER, quantity);
    utils.fillFinalWishList(ORDER);
    utils.updateSendButton(ORDER);
}

fill();
