import { useContext, useEffect, useState } from "react";
import {
    ProductWrapper,
    ProductImage,
    ProductInfo,
    ProductName,
    ProductPrice,
    ProductDescription,
    ProductAvailability,
    Divisor
} from "./styles";
import priceFormat from "../../../utils/priceFormat";
import QuantityControl from "./QuantityControl";
import ProductShape from "../../../models/Product";
import OrderContext from "../../../store/OrderContext";
import ProductType from "../../../models/ProductType";

interface ProductProps {
    product: ProductShape;
    productType: ProductType;
}

const Product: React.FC<ProductProps> = ({ product, productType }) => {
    const [order, setOrder] = useContext(OrderContext);
    const [availability, setAvailability] = useState<number>(0);

    useEffect(() => {
        const fetchAvailability = setInterval(() => {
            const fetched = order.availability.getAvailabilityByID(product.id);
            if (fetched) setAvailability(fetched);
        }, 200);

        if (availability) clearInterval(fetchAvailability);
    });

    const showAvailability = () => {
        if (productType.only_pre_ordering) return;

        return (
            <ProductAvailability>
                {
                availability != 0 ?
                `${availability} unidades disponíveis` :
                "Sabor indisponível"
                }
            </ProductAvailability>
        )
    }

    return (
        <ProductWrapper>
            <ProductImage src={product.image_url} />
            <ProductInfo>
                <ProductName>
                    {product.name}
                </ProductName>
                <ProductPrice>
                    {priceFormat(product.price)}
                </ProductPrice>
                <ProductDescription>
                    {product.description}
                </ProductDescription>
                {showAvailability()}
            </ProductInfo>
            <Divisor />
            <QuantityControl
                productID={product.id}
                productType={productType}
            />
        </ProductWrapper>
    )
}

export default Product;
