import SubProductsSection from "./SubProductsSection";
import data from "../../../data";
import { Divisor, DivisorContainer } from "./styles";

const Products: React.FC = () => {
    return (
        <>
            {Object.values(data.product_types).map((productType, i) => {
                return (
                    <div key={i}>
                        <SubProductsSection
                            productType={productType}
                            key={productType.id}
                        />
                        <DivisorContainer>
                            <Divisor />
                        </DivisorContainer>
                    </div>
                );
            })}
        </>
    );
};

export default Products;
