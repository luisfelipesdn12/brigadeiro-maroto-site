import cep from "cep-promise";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Collapse } from "react-collapse";
import Order from "../../../models/Order";
import OrderContext from "../../../store/OrderContext";
import isInputEmpty from "../../../utils/isInputEmpty";
import { Label, Input, FormContainer, FormNotice } from "./styles";

interface OrderRequiredInformationFormProps {
    setIsFormFull: React.Dispatch<React.SetStateAction<boolean>>;
    includeShippingHook: boolean;
}

export interface FormFields {
    name: string;
    CEP: string;
    street: string;
    city: string;
    neighborhood: string;
    streetNumber: number;
}

const OrderRequiredInformationForm: React.FC<OrderRequiredInformationFormProps> = ({
    setIsFormFull,
    includeShippingHook,
}) => {
    const [order, setOrder] = useContext(OrderContext);

    const [isCEPValid, setisCEPValid] = useState<boolean>(true);

    const nameInput = useRef<HTMLInputElement>(null);
    const CEPInput = useRef<HTMLInputElement>(null);
    const streetInput = useRef<HTMLInputElement>(null);
    const neighborhoodInput = useRef<HTMLInputElement>(null);
    const cityInput = useRef<HTMLInputElement>(null);
    const streetNumberInput = useRef<HTMLInputElement>(null);

    const updateIsFormFull = () => {
        if (order.includeShipping) {
            if (
                isInputEmpty(nameInput) ||
                isInputEmpty(CEPInput) ||
                isInputEmpty(streetInput) ||
                isInputEmpty(cityInput) ||
                isInputEmpty(neighborhoodInput) ||
                isInputEmpty(streetNumberInput)
            ) {
                setIsFormFull(false);
            } else {
                setIsFormFull(true);
            }
        } else {
            if (isInputEmpty(nameInput)) {
                setIsFormFull(false);
            } else {
                setIsFormFull(true);
            }
        }
    };

    const updateFinishOrderFormFields = () => {
        order.finishOrderFormFields = {
            name: nameInput.current?.value,
            CEP: CEPInput.current?.value,
            neighborhood: neighborhoodInput.current?.value,
            city: cityInput.current?.value,
            street: streetInput.current?.value,
            streetNumber: parseInt(streetNumberInput.current?.value),
        };

        const newOrder = new Order();
        Object.assign(newOrder, order);
        setOrder(newOrder);
    };

    const fetchLocationInfoFromCEP = () => {
        const CEPWithoutSeparator: string = CEPInput.current?.value.replace(
            "-",
            ""
        );

        if (CEPWithoutSeparator.length === 8) {
            cep(CEPWithoutSeparator)
                .then((response: any) => {
                    streetInput.current.value = response.street;
                    cityInput.current.value = response.city;
                    neighborhoodInput.current.value = response.neighborhood;

                    setisCEPValid(true);
                })
                .catch((response: any) => {
                    if (process.env.NODE_ENV === "development") {
                        console.warn(response);
                    }

                    setisCEPValid(false);
                });
        } else {
            setisCEPValid(true);
        }
    };

    useEffect(updateIsFormFull, [includeShippingHook]);

    return (
        <FormContainer
            onChange={() => {
                updateIsFormFull();
                updateFinishOrderFormFields();
            }}
        >
            <Label htmlFor="name">Nome</Label>
            <br />
            <Input
                name="name"
                placeholder="ex.: Douglas Teixeira de Queiroz"
                ref={nameInput}
            />
            <br />
            <Collapse isOpened={order.includeShipping}>
                <Label htmlFor="cep">CEP</Label>
                <br />
                <Input
                    name="cep"
                    type="text"
                    maxLength={9}
                    ref={CEPInput}
                    placeholder="ex.: 01311-000"
                    onChange={fetchLocationInfoFromCEP}
                />
                {isCEPValid ? (
                    <br />
                ) : (
                    <FormNotice>O CEP inserido não é válido</FormNotice>
                )}
                <Label htmlFor="street">Rua</Label>
                <br />
                <Input
                    name="street"
                    placeholder="ex.: Av. Paulista"
                    ref={streetInput}
                    value={order.finishOrderFormFields?.street}
                    readOnly
                    disabled
                />
                <br />
                <Label htmlFor="neighborhood">Bairro</Label>
                <br />
                <Input
                    name="neighborhood"
                    placeholder="ex.: Bela Vista"
                    ref={neighborhoodInput}
                    value={order.finishOrderFormFields?.neighborhood}
                    readOnly
                    disabled
                />
                <br />
                <Label htmlFor="city">Cidade</Label>
                <br />
                <Input
                    name="city"
                    placeholder="ex.: São Paulo"
                    ref={cityInput}
                    value={order.finishOrderFormFields?.city}
                    readOnly
                    disabled
                />
                <br />
                <Label htmlFor="number">Número da rua</Label>
                <br />
                <Input
                    name="number"
                    type="number"
                    placeholder="ex.: 314"
                    ref={streetNumberInput}
                />
            </Collapse>
        </FormContainer>
    );
};

export default OrderRequiredInformationForm;
