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

export interface ProductShape {
    id: string;
    name: string;
    desc: string;
    price: number;
    image_url: string;
}

interface ProductProps {
    product: ProductShape;
    availability: number;
    omitAvailability?: boolean;
}

const Product: React.FC<ProductProps> = ({ product, availability, omitAvailability }) => {
    const showAvailability = () => {
        if (omitAvailability) return;

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
                    {product.desc}
                </ProductDescription>
                {showAvailability()}
            </ProductInfo>
            <Divisor />
            <QuantityControl/>
        </ProductWrapper>
    )
}

export default Product;
