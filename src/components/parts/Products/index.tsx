import { useState } from "react";
import SubProductsSection from "./SubProductsSection";
import { data } from "../../../../pages/_app";
import { Divisor, DivisorContainer } from "./styles";
import getAvailability from "../../../utils/getAvailability";

interface ProductsProps {
    order: { [productID: string]: number };
}

const Products: React.FC<ProductsProps> = ({ order }) => {
    const [availability, setAvailability] = useState({});

    const updateAvailability = async () => {
        try {
            setAvailability(await getAvailability());
        } catch (error) {
            console.warn(error);
        }
    }

    updateAvailability();

    return (
        <>
            {data.products_sections.map(section =>
                <span key={"span"+section.desc}>
                    <SubProductsSection
                        section={section}
                        availability={availability}
                        key={"SubProductsSection"+section.desc}
                    />
                    <DivisorContainer key={"DivisorContainer"+section.desc}>
                        <Divisor key={"Divisor"+section.desc} />
                    </DivisorContainer>
                </span>
            )}
        </>
    )
}

export default Products;
