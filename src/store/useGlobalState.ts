import { Dispatch, SetStateAction, useState } from "react"
import Order from "../Order";

export enum PossibleActions {
    SET_DUMMY = "setDummy"
}

const useGlobalState = (): [Order, Dispatch<SetStateAction<Order>>] => {
    const [globalState, setGlobalState] = useState<Order>(new Order());

    return [globalState, setGlobalState];
}

export default useGlobalState;
