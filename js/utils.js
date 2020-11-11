import { brigadeiros } from '../data/content.js';

export function returnCleanNumber(numberAsString) {
    return String(numberAsString)
            .replaceAll(" ", "")
            .replaceAll("+", "")
            .replaceAll("-", "")
            .toString();
}

function hideClass(className) {
    const elements = document.getElementsByClassName(className);

    for (const element of elements) {
        element.classList.add("hidden");
    }
}

function priceFormat(price) {
    return "R$ " + price.toFixed(2);
}

function updateWishList(ORDER) {
    for (const brigadeiro of brigadeiros) {
        const wishItem = document.getElementById("wish-item-" + brigadeiro.id);
        ORDER[brigadeiro.id] > 0 ? wishItem.classList.remove("hidden") : wishItem.classList.add("hidden");

        const quantity = document.getElementById("wish-item-quantity-" + brigadeiro.id);
        quantity.innerHTML = ORDER[brigadeiro.id] + " un.";

        const price = document.getElementById("wish-item-price-" + brigadeiro.id);
        price.innerHTML = priceFormat(ORDER[brigadeiro.id] * brigadeiro.price);
    }
}

function updateTotalPrice(ORDER) {
    const totalPriceElement = document.getElementById("total-price");
    let finalValue = 0;

    for (const brigadeiro of brigadeiros) {
        finalValue += (ORDER[brigadeiro.id] * brigadeiro.price);
    }

    totalPriceElement.innerHTML = priceFormat(finalValue);
}

function updateQuantity(value, brigadeiroID, ORDER) {
    const quantityElement = document.getElementById("quantity-" + brigadeiroID);
    const finalValue = ORDER[brigadeiroID] + value > 0 ? ORDER[brigadeiroID] + value : 0;

    quantityElement.innerHTML = ORDER[brigadeiroID] = finalValue;
    updateWishList(ORDER);
    updateTotalPrice(ORDER);
}

function insertBrigadeiroCard(brigadeiro, ORDER) {
    const brigadeirosList = document.getElementById("brigadeiros-list");

    const card = document.createElement("li");
    card.className = "brigadeiro-card max-w-sm rounded overflow-hidden shadow mb-3";
    brigadeirosList.appendChild(card);

    const img = document.createElement("img");
    img.className = "w-full";
    img.src = brigadeiro.img;
    card.appendChild(img);

    const titleAndDescription = document.createElement("div");
    titleAndDescription.className = "px-6 py-4";
    card.appendChild(titleAndDescription);

    const title = document.createElement("h1");
    title.className = "font-bold text-xl";
    title.innerHTML = brigadeiro.name;
    titleAndDescription.appendChild(title);
    
    const price = document.createElement("p");
    price.className = "text-gray-900 font-semibold text-lg mb-2";
    price.innerHTML = priceFormat(brigadeiro.price);
    titleAndDescription.appendChild(price);

    const description = document.createElement("p");
    description.className = "text-gray-700 text-base description";
    description.innerHTML = brigadeiro.desc;
    titleAndDescription.appendChild(description);

    const divider = document.createElement("hr");
    divider.className = "mx-3";
    card.appendChild(divider);

    const quantityControl = document.createElement("div");
    quantityControl.className = "quantity-n-control flex justify-between text-gray-900 font-semibold text-lg px-6 py-4";
    card.appendChild(quantityControl);
    
    const quantityElement = document.createElement("span");
    quantityElement.id = "quantity-" + brigadeiro.id;
    quantityElement.className = "quantity font-medium";
    quantityElement.innerHTML = ORDER[brigadeiro.id];
    
    const decrease = document.createElement("span");
    decrease.className = "cursor-pointer select-none hover:bg-gray-200 rounded-full px-2";
    decrease.innerHTML = "-";
    decrease.onclick = () => updateQuantity(-1, brigadeiro.id, ORDER);
    
    const increase = document.createElement("span");
    increase.className = "cursor-pointer select-none hover:bg-gray-200 rounded-full px-2";
    increase.innerHTML = "+";
    increase.onclick = () => updateQuantity(1, brigadeiro.id, ORDER);
    
    quantityControl.appendChild(decrease);
    quantityControl.appendChild(quantityElement);
    quantityControl.appendChild(increase);
}

function insertWishItem(brigadeiro, ORDER) {
    const finalWishList = document.getElementById("final-wish-list");

    const wishItem = document.createElement("li");
    wishItem.id = "wish-item-" + brigadeiro.id;
    wishItem.className = "wish-item rounded bg-white p-3 mb-3 max-w-sm md:w-1/2 shadow-md hidden";
    finalWishList.appendChild(wishItem);

    const img = document.createElement("img");
    img.src = brigadeiro.img;
    img.className = "rounded-full float-left w-10 mr-6 mb-3 shadow";
    wishItem.appendChild(img);

    const name = document.createElement("p");
    name.className = "text-gray-900 font-semibold";
    name.innerHTML = brigadeiro.name;
    wishItem.appendChild(name);

    const flexDiv = document.createElement("div");
    flexDiv.className = "flex justify-between"
    wishItem.appendChild(flexDiv);

    const quantity = document.createElement("p");
    quantity.id = "wish-item-quantity-" + brigadeiro.id;
    quantity.className = "text-gray-800 font-medium";
    quantity.innerHTML = ORDER[brigadeiro.id] + " un.";
    flexDiv.appendChild(quantity);

    const price = document.createElement("p");
    price.id = "wish-item-price-" + brigadeiro.id;
    price.className = "text-gray-800 font-medium";
    price.innerHTML = priceFormat(ORDER[brigadeiro.id] * brigadeiro.price);
    flexDiv.appendChild(price);
}

export function fillBrigadeirosList(brigadeiros, ORDER) {
    for (let brigadeiro of brigadeiros) {
        insertBrigadeiroCard(brigadeiro, ORDER);
    }
    
    hideClass("mock-brigadeiro-card");
}

export function fillFinalWishList(brigadeiros, ORDER) {
    for (let brigadeiro of brigadeiros) {
        insertWishItem(brigadeiro, ORDER);
    }

    hideClass("mock-wish-item");
}