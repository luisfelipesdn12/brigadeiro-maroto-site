import Section, { SectionProps } from "../../base/Section";
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
    availability: { [key: string] : number };
}

const SubProductsSection: React.FC<SubProductsSectionProps> = ({ section, availability }) => {
    return (
        <Section
            paddingTop="4rem"
            paddingBottom="4rem"
            paddingLeft=".75rem"
            paddingRight=".75rem"
        >
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
                    <Product
                        product={p}
                        availability={availability[p.id]}
                        omitAvailability={section.name == "Bolos de Pote"}
                        key={p.id}
                    />
                )}
            </ProductList>
        </Section>
    )
}

export default SubProductsSection;
