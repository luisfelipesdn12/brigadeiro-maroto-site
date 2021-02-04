import SubProductsSection from "./SubProductsSection";
import { data } from "../../../../pages/_app";

const Products: React.FC = () => {
    return (
        <>
            {data.products_sections.map(section =>
                <SubProductsSection key={section.desc} section={section}/>
            )}
        </>
    )
}

export default Products;
