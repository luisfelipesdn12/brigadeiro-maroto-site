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

function updateFinalPrice() {
    const finalPrice = document.getElementById("final-price");
    finalPrice.innerHTML = 0;

    for (const brigadeiro of brigadeiros) {
        finalPrice.innerHTML = parseInt(finalPrice.innerHTML) + (brigadeiro.price * brigadeiro.quantity);
    }
}

function insertTypeCard(type) {
    const typesList = document.getElementById("types-list");

    const card = document.createElement("li");
    card.className = "brigadeiro-card max-w-sm rounded overflow-hidden shadow mb-3";
    typesList.appendChild(card);

    const img = document.createElement("img");
    img.className = "w-full";
    img.src = type.img;
    card.appendChild(img);

    const titleAndDescription = document.createElement("div");
    titleAndDescription.className = "px-6 py-4";
    card.appendChild(titleAndDescription);

    const title = document.createElement("h1");
    title.className = "font-bold text-xl";
    title.innerHTML = type.name;
    titleAndDescription.appendChild(title);
    
    const price = document.createElement("p");
    price.className = "text-gray-900 font-semibold text-lg mb-2";
    price.innerHTML = priceFormat(type.price);
    titleAndDescription.appendChild(price);

    const description = document.createElement("p");
    description.className = "text-gray-700 text-base description";
    description.innerHTML = type.desc;
    titleAndDescription.appendChild(description);

    const divider = document.createElement("hr");
    divider.className = "mx-3";
    card.appendChild(divider);

    const quantityControl = document.createElement("div");
    quantityControl.className = "quantity-n-control flex justify-between text-gray-900 font-semibold text-lg px-6 py-4";
    card.appendChild(quantityControl);
    
    const quantity = document.createElement("span");
    quantity.className = "quantity font-medium";
    quantity.innerHTML = type.quantity;
    
    const decrease = document.createElement("span");
    decrease.className = "cursor-pointer select-none hover:bg-gray-200 rounded-full px-2";
    decrease.innerHTML = "-";
    decrease.onclick = function() {
        if (quantity.innerHTML > 0) {
            quantity.innerHTML = type.quantity -= 1;
            updateFinalPrice();
        }
    };
    
    const increase = document.createElement("span");
    increase.className = "cursor-pointer select-none hover:bg-gray-200 rounded-full px-2";
    increase.innerHTML = "+";
    increase.onclick = function() {
        quantity.innerHTML = type.quantity += 1;
        updateFinalPrice();
    };
    
    quantityControl.appendChild(decrease);
    quantityControl.appendChild(quantity);
    quantityControl.appendChild(increase);
}

export function fillBrigadeiroTypeList(brigadeiros) {
    for (let type of brigadeiros) {
        insertTypeCard(type);
    }

    hideClass("mock-type-card");
}
