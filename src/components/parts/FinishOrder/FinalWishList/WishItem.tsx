/*
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
*/

import priceFormat from "../../../../utils/priceFormat";
import { ProductShape } from "../../Products/Product";
import {
    WishItemWrapper,
    WishItemImage,
    WishItemName,
    WishItemQuantityAndPriceContainer,
    WishItemQuantity,
    WishItemPrice,
} from "./styles";

interface WishItemProps {
    product: ProductShape;
    quantityOrdered: number;
}

const WishItem: React.FC<WishItemProps> = ({ product, quantityOrdered }) => {
    return (
        <WishItemWrapper>
            <WishItemImage
                src={product.image_url}
            />
            <WishItemName>
                {product.name}
            </WishItemName>
            <WishItemQuantityAndPriceContainer>
                <WishItemQuantity>
                    {`${quantityOrdered} un.`}
                </WishItemQuantity>
                <WishItemPrice>
                    {priceFormat(quantityOrdered * product.price)}
                </WishItemPrice>
            </WishItemQuantityAndPriceContainer>
        </WishItemWrapper>
    )
}

export default WishItem;
