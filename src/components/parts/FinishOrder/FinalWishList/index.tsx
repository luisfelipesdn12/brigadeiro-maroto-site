import React, { useContext } from "react";
import OrderContext from "../../../../store/OrderContext";
import { FinalWishListWrapper } from "./styles";
import WishItem from "./WishItem";

const FinalWishList: React.FC = () => {
    const [order, setOrder] = useContext(OrderContext);

    return (
        <FinalWishListWrapper>
            {[order.kitOrder, order.brownieOrder, order.cakeOrder].map(
                (productOrder, i) => {
                    return (
                        <div key={i}>
                            {productOrder.productTypeInfo.products.map(
                                (product) => {
                                    const quantityOrdered = productOrder.getQuantityOrdered(
                                        product.id
                                    );

                                    if (quantityOrdered > 0) {
                                        return (
                                            <WishItem
                                                product={product}
                                                quantityOrdered={
                                                    quantityOrdered
                                                }
                                                key={product.id}
                                            />
                                        );
                                    }
                                }
                            )}
                        </div>
                    );
                }
            )}
        </FinalWishListWrapper>
    );
};

export default FinalWishList;
