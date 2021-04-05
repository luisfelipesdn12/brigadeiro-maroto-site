import Product from "../../../../../models/Product";

const BrigadeiroOption: React.FC<{
    brigadeiro: Product;
}> = ({ brigadeiro }) => {
    return (
        <>
            <h5>{brigadeiro.name}</h5>
            <p>{brigadeiro.description}</p>
        </>
    );
}

export default BrigadeiroOption;
