import { ChangeEventHandler } from "react";
import { ShippingOptionForm, ShippingOptionLabel } from "./styles";

interface ShippingOptionProps {
    handleChange: ChangeEventHandler<HTMLInputElement>;
}

const ShippingOption: React.FC<ShippingOptionProps> = ({ handleChange }) => {
    return (
        <ShippingOptionForm>
            <input
                type="checkbox"
                name="shipping-option"
                onChange={handleChange}
            />
            <ShippingOptionLabel htmlFor="shipping-option">
                Entregar (R$ 2.00)
            </ShippingOptionLabel>
        </ShippingOptionForm>
    );
};

export default ShippingOption;
