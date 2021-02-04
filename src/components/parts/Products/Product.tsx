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
import { priceFormat } from "../../../utils";

export interface ProductShape {
    id: string;
    name: string;
    desc: string;
    price: number;
    image_url: string;
}

interface ProductProps {
    product: ProductShape;
}

const Product: React.FC<ProductProps> = ({ product }) => {
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
                    {product.desc}
                </ProductDescription>
                <ProductAvailability>
                    {"2 unidades disponíveis"}
                </ProductAvailability>
            </ProductInfo>
            <Divisor />
            <h1>- 0 +</h1>
        </ProductWrapper>
    )
}

export default Product;
