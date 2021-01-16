import { PHONE } from '../data/constants.js';
import { brigadeiros, cakes } from '../data/content.js';

const flavors = brigadeiros.concat(cakes);

/**
 * priceFormat takes a number and returns it formated
 * with the R$ prefix and two decimal places.
 * @example
 *      priceFormat(3.141592)
 *      // returns: "R$ 3.14"
 * @param {number} price The price to ber formated.
 * @returns {string} The formated price.
 */
function priceFormat(price) {
    return "R$ " + price.toFixed(2);
}

/**
 * updateWishList takes the ORDER object and for
 * each flavor of brigadeiro, update the quantity
 * in wish list. If the quantity is 0, it hides 
 * it from the list. 
 * @param {object} ORDER The quantity of each flavor with the id as key.
 */
function updateWishList(ORDER) {
    for (const flavor of flavors) {
        const wishItem = document.getElementById("wish-item-" + flavor.id);
        ORDER[flavor.id] > 0 ? wishItem.classList.remove("hidden") : wishItem.classList.add("hidden");

        const quantity = document.getElementById("wish-item-quantity-" + flavor.id);
        quantity.innerHTML = ORDER[flavor.id] + " un.";

        const price = document.getElementById("wish-item-price-" + flavor.id);
        price.innerHTML = priceFormat(ORDER[flavor.id] * flavor.price);
    }
}

/**
 * updateTotalPrice takes the ORDER object, sums
 * all the prices and insert the result in the 
 * total price element. 
 * @param {object} ORDER The quantity of each flavor with the id as key.
 */
export function updateTotalPrice(ORDER) {
    const totalPriceElement = document.getElementById("total-price");
    let finalValue = 0;

    for (const flavor of flavors) {
        finalValue += (ORDER[flavor.id] * flavor.price);
    }

    if (document.getElementById("shipping-option").checked == true) {
        finalValue += 2;
    }

    totalPriceElement.innerHTML = priceFormat(finalValue);
}

/**
 * returnCleanNumber takes some phone number and
 * keep just the digits of it. Removing " ", "+"
 * and "-" characters.
 * @example
 *      returnCleanNumber("+55 11 93141-5925")
 *      // returns: "5511931415925"
 * @param {string} numberAsString The phone number.
 * @returns {string} The digits of the phone number.
 */
function returnCleanNumber(numberAsString) {
    return String(numberAsString)
            .replaceAll(" ", "")
            .replaceAll("+", "")
            .replaceAll("-", "")
            .toString();
}

/**
 * updateSendButton takes the ORDER object and
 * verifies if have some flavor ordered. If yes,
 * it defines the href property of the send button
 * to the automatic WhatsApp message with the order.
 * Otherwise, it defines the href property to the
 * showAddAnItemAlert function.
 * @param {object} ORDER The quantity of each flavor with the id as key.
 */
export function updateSendButton(ORDER) {
    let message = "Olá, Douglas! Eu vim pelo site e gostaria de fazer um pedido.\n";
    let hasBrigadeirosOrders, hasCakesOrders = false;

    for (const brigadeiro of brigadeiros) {
        if (ORDER[brigadeiro.id] > 0) {
            if (!hasBrigadeirosOrders) message += `\nBrigadeiros:\n`;

            hasBrigadeirosOrders = true;
            message += `${ORDER[brigadeiro.id]} un. ${brigadeiro.name}\n`;
        }
    }
    
    for (const cake of cakes) {
        if (ORDER[cake.id] > 0) {
            if (!hasCakesOrders) message += `\nBolos de Pote (para encomenda):\n`;

            hasCakesOrders = true;
            message += `${ORDER[cake.id]} un. ${cake.name}\n`;
        }
    }

    const sendButton = document.getElementById("send-button");
    const hasOrders = hasBrigadeirosOrders || hasCakesOrders;

    if (hasOrders) {
        message += `\nTotal: ${document.getElementById("total-price").innerHTML}`;
        
        sendButton.href = encodeURI(`https://wa.me/${returnCleanNumber(PHONE)}/?text=` + message);
        sendButton.rel = "external noopener noreferrer";
        sendButton.classList.remove("cursor-not-allowed");
        sendButton.classList.remove("opacity-75");
    } else {
        sendButton.removeAttribute("href");
        sendButton.rel = "";
        sendButton.classList.add("cursor-not-allowed");
        sendButton.classList.add("opacity-75");
    }
}

/**
 * updateQuantity increase or decrease the quantity
 * of a brigadeiro in the quantity element and in
 * the ORDER object. If the final values is lower
 * than 0, it is considered as 0. It calls the
 * functions to update the wish list, the total
 * price and the send button as well.
 * @param {number} value Integer, how much to incrase the quantity (decrases if negative)
 * @param {string} brigadeiroID The id of the brigadeiro like it's in content.js
 * @param {object} ORDER The quantity of each flavor with the id as key.
 */
function updateQuantity(value, brigadeiroID, ORDER, availability) {
    const quantityElement = document.getElementById("quantity-" + brigadeiroID);
    let finalValue = ORDER[brigadeiroID] + value > 0 ? ORDER[brigadeiroID] + value : 0;

    if (availability) {
        finalValue = finalValue > availability ? availability : finalValue;
    }

    quantityElement.innerHTML = ORDER[brigadeiroID] = finalValue;
    updateWishList(ORDER);
    updateTotalPrice(ORDER);
    updateSendButton(ORDER);
}

/**
 * insertFlavorCard takes a flavor object, the
 * id of the list and the ORDER, then creates
 * an list-item element and insert it on the list.
 * @param {object} flavor The objects which represents a flavor, as seted in content.js
 * @param {string} listID ID of the list to the card be added in.
 * @param {object} ORDER The quantity of each flavor with the id as key.
 */
function insertFlavorCard(flavor, listID, ORDER, quantity) {
    const brigadeirosList = document.getElementById(listID);

    const card = document.createElement("li");
    card.className = "brigadeiro-card max-w-sm rounded-xl overflow-hidden shadow mb-3 bg-white";
    brigadeirosList.appendChild(card);

    const img = document.createElement("img");
    img.className = "w-full";
    img.src = flavor.img;
    card.appendChild(img);

    const titleAndDescription = document.createElement("div");
    titleAndDescription.className = "px-6 py-4";
    card.appendChild(titleAndDescription);

    const title = document.createElement("h1");
    title.className = "text-yellow-900 font-bold text-xl";
    title.innerHTML = flavor.name;
    titleAndDescription.appendChild(title);
    
    const price = document.createElement("p");
    price.className = "text-gray-900 font-semibold text-lg mb-2";
    price.innerHTML = priceFormat(flavor.price);
    titleAndDescription.appendChild(price);

    const description = document.createElement("p");
    description.className = "text-gray-700 text-base description";
    description.innerHTML = flavor.desc;
    titleAndDescription.appendChild(description);

    if (quantity) {
        const availability = document.createElement("p");
        availability.id = `availability-${flavor.id}`;
        availability.className = "text-yellow-900 text-base availability";
        availability.innerHTML = quantity != 0 ? `${quantity} unidades disponíveis` : "Sabor indisponível";
        titleAndDescription.appendChild(availability);
    }

    const divider = document.createElement("hr");
    divider.className = "mx-3";
    card.appendChild(divider);

    const quantityControl = document.createElement("div");
    quantityControl.className = "quantity-n-control flex justify-between text-gray-900 font-semibold text-lg px-6 py-4";
    quantityControl.style = "font-family: 'Rubik', 'Open Sans', sans-serif;";
    card.appendChild(quantityControl);
    
    const quantityElement = document.createElement("span");
    quantityElement.id = "quantity-" + flavor.id;
    quantityElement.className = "quantity select-none font-medium";
    quantityElement.innerHTML = ORDER[flavor.id];
    
    const decrease = document.createElement("span");
    decrease.className = "cursor-pointer select-none hover:bg-gray-200 rounded-full px-2";
    decrease.innerHTML = "-";
    decrease.onclick = quantity ?
                    () => updateQuantity(-1, flavor.id, ORDER, quantity) :
                    () => updateQuantity(-1, flavor.id, ORDER);
    
    const increase = document.createElement("span");
    increase.className = "cursor-pointer select-none hover:bg-gray-200 rounded-full px-2";
    increase.innerHTML = "+";
    increase.onclick = quantity ?
                    () => updateQuantity(1, flavor.id, ORDER, quantity) :
                    () => updateQuantity(1, flavor.id, ORDER);
    
    quantityControl.appendChild(decrease);
    quantityControl.appendChild(quantityElement);
    quantityControl.appendChild(increase);
}

/**
 * insertWishItem takes a flavor object and the
 * ORDER, then creates an list-item element and
 * insert it on "final-wish-list".
 * @param {object} flavor The objects which represents a flavor, as seted in content.js
 * @param {object} ORDER The quantity of each flavor with the id as key.
 */
function insertWishItem(flavor, ORDER) {
    const finalWishList = document.getElementById("final-wish-list");

    const wishItem = document.createElement("li");
    wishItem.id = "wish-item-" + flavor.id;
    wishItem.className = "wish-item rounded-xl bg-white py-4 px-6 mb-3 max-w-sm md:w-1/2 shadow-md hidden";
    finalWishList.appendChild(wishItem);

    const img = document.createElement("img");
    img.src = flavor.img;
    img.className = "rounded-full float-left w-10 mr-6 mb-3 shadow";
    wishItem.appendChild(img);

    const name = document.createElement("p");
    name.className = "text-gray-900 font-semibold";
    name.innerHTML = flavor.name;
    wishItem.appendChild(name);

    const flexDiv = document.createElement("div");
    flexDiv.className = "flex justify-between"
    wishItem.appendChild(flexDiv);

    const quantity = document.createElement("p");
    quantity.id = "wish-item-quantity-" + flavor.id;
    quantity.className = "text-gray-800 font-medium";
    quantity.innerHTML = ORDER[flavor.id] + " un.";
    flexDiv.appendChild(quantity);

    const price = document.createElement("p");
    price.id = "wish-item-price-" + flavor.id;
    price.className = "text-gray-800 font-medium";
    price.innerHTML = priceFormat(ORDER[flavor.id] * flavor.price);
    flexDiv.appendChild(price);
}

/**
 * hideClass add the class "hidden" for all the elements
 * with the class name which is passed by parameter. 
 * @param {string} className The class to be hided.
 */
function hideClass(className) {
    const elements = document.getElementsByClassName(className);

    for (const element of elements) {
        element.classList.add("hidden");
    }
}

/**
 * fillBrigadeirosList applies the 
 * insertFlavorCard for each flavor in
 * brigadeiros list, then hide the mock-cards.
 * @param {object} ORDER The quantity of each flavor with the id as key.
 */
export function fillBrigadeirosList(ORDER, quantity) {
    for (let brigadeiro of brigadeiros) {
        insertFlavorCard(brigadeiro, "brigadeiros-list", ORDER, quantity[brigadeiro.id]);
    }
    
    hideClass("mock-brigadeiro-card");
}

/**
 * fillCakesList applies the insertFlavorCard 
 * for each flavor in cakes list, then hide
 * the mock-cards.
 * @param {object} ORDER The quantity of each flavor with the id as key.
 */
export function fillCakesList(ORDER) {
    for (let cake of cakes) {
        insertFlavorCard(cake, "cakes-list", ORDER);
    }
    
    hideClass("mock-cake-card");
}

/**
 * fillFinalWishList applies the 
 * insertWishItem for each flavor in
 * brigadeiros list, then hide the mock-items.
 * @param {object} ORDER The quantity of each flavor with the id as key.
 */
export function fillFinalWishList(ORDER) {
    for (let flavor of flavors) {
        insertWishItem(flavor, ORDER);
    }

    hideClass("mock-wish-item");
}
