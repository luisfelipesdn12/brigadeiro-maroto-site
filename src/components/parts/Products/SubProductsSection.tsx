import Section from "../../base/Section";
import Title from "../../base/Title";
import Description from "./Description";
import Product, { ProductShape } from "./Product";
import { ProductList } from "./styles";

interface Section {
    name: string;
    desc: string;
    products: ProductShape[];
}

interface SubProductsSectionProps {
    section: Section;
}

const SubProductsSection: React.FC<SubProductsSectionProps> = ({ section }) => {
    return (
        <Section>
            <Title
                content={`${section.name}:`}
                color={"#744210"}
                textAlign={"left"}
            />
            <Description
                content={section.desc}
            />
            <ProductList>
                {section.products.map(p =>
                    <Product key={p.id} product={p} />
                )}
            </ProductList>
        </Section>
    )
}

export default SubProductsSection;
