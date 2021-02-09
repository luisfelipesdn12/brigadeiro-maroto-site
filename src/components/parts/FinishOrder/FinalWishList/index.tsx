import { ProductShape } from "../../Products/Product";
import { FinalWishListWrapper } from "./styles";
import WishItem from "./WishItem";

interface FinalWishListProps {
    products: ProductShape[];
    order: { [productID: string]: number };
}

const FinalWishList: React.FC<FinalWishListProps> = ({ products, order }) => {
    return (
        <FinalWishListWrapper>
            {products.map(product => {
                if (order[product.id] > 0) {
                    return (
                        <WishItem
                            product={product}
                            quantityOrdered={order[product.id]}
                            key={`wish-item-${product.id}`}
                        />
                    )
                }

            })}
        </FinalWishListWrapper>
    )
}

export default FinalWishList;
