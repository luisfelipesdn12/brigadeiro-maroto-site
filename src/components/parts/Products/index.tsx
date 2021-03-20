import SubProductsSection from "./SubProductsSection";
import data from '../../../data';
import { Divisor, DivisorContainer } from "./styles";

const Products: React.FC = () => {
    return (
        <>
            <SubProductsSection
                productType={data.product_types.kit}
            />
            <DivisorContainer>
                <Divisor/>
            </DivisorContainer>
            <SubProductsSection
                productType={data.product_types.brownie}
            />
            <DivisorContainer>
                <Divisor/>
            </DivisorContainer>
            <SubProductsSection
                productType={data.product_types.cake}
            />
            <DivisorContainer>
                <Divisor/>
            </DivisorContainer>
        </>
    )
}

export default Products;
