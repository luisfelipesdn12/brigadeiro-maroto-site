import ProductType from "../../../models/ProductType";
import Section from "../../base/Section";
import Title from "../../base/Title";
import Description from "./Description";
import Product from "./Product";
import { ProductList } from "./styles";

interface SubProductsSectionProps {
    productType: ProductType;
}

const SubProductsSection: React.FC<SubProductsSectionProps> = ({ productType }) => {
    return (
        <Section
            paddingTop="4rem"
            paddingBottom="4rem"
            paddingLeft=".75rem"
            paddingRight=".75rem"
        >
            <Title
                content={`${productType.name}:`}
                color={"#744210"}
                textAlign={"left"}
            />
            <Description
                content={productType.description}
            />
            <ProductList>
                {productType.products.map(p =>
                    <Product
                        product={p}
                        productType={productType}
                        key={p.id}
                    />
                )}
            </ProductList>
        </Section>
    )
}

export default SubProductsSection;
