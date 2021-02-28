import { createContext, Dispatch, SetStateAction } from 'react';
import Order from '../Order';

const OrderContext = createContext<[Order, Dispatch<SetStateAction<Order>>]>(undefined);

export default OrderContext;
