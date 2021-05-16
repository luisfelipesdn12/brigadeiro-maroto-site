import React, { useContext, useEffect, useRef, useState } from "react";
import OrderContext from "../../../store/OrderContext";
import { Label, Input, FormContainer, RequiredNotice } from "./styles";

interface OrderRequiredInformationFormProps {
    setIsFormFull: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface FormFields {
    name: string;
}

const OrderRequiredInformationForm: React.FC<OrderRequiredInformationFormProps> = ({
    setIsFormFull,
}) => {
    const [order, setOrder] = useContext(OrderContext);

    const nameInput = useRef<HTMLInputElement>(null);

    const updateIsFormFull = () => {
        if (
            nameInput.current?.value !== "" &&
            nameInput.current?.value !== undefined
        ) {
            setIsFormFull(true);
        } else {
            setIsFormFull(false);
        }
    };

    const updateFinishOrderFormFields = () => {
        order.finishOrderFormFields = {
            name: nameInput.current?.value,
        };
    };

    return (
        <FormContainer
            onChange={() => {
                updateIsFormFull();
                updateFinishOrderFormFields();
            }}
        >
            <Label htmlFor="name">Qual é o seu nome?</Label>
            <br />
            <Input name="name" type="text" ref={nameInput} />
        </FormContainer>
    );
};

export default OrderRequiredInformationForm;
