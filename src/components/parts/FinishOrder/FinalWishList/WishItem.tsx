import Product from "../../../../models/Product";
import priceFormat from "../../../../utils/priceFormat";
import {
    WishItemWrapper,
    WishItemImage,
    WishItemName,
    WishItemQuantityAndPriceContainer,
    WishItemQuantity,
    WishItemPrice,
} from "./styles";

interface WishItemProps {
    product: Product;
    quantityOrdered: number;
}

const WishItem: React.FC<WishItemProps> = ({ product, quantityOrdered }) => {
    return (
        <WishItemWrapper
            onClick={() => {
                document.getElementById(`Product-${product.id}`)
                    .scrollIntoView({behavior: 'smooth'});
            }}
        >
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
