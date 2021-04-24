import SubProductsSection from "./SubProductsSection";
import data from "../../../data";
import { Divisor, DivisorContainer } from "./styles";

const Products: React.FC = () => {
    return (
        <>
            {Object.values(data.product_types).map(productType => {
                return (
                    <>
                        <SubProductsSection
                            productType={productType}
                            key={productType.id}
                        />
                        <DivisorContainer>
                            <Divisor />
                        </DivisorContainer>
                    </>
                );
            })}
        </>
    );
};

export default Products;
