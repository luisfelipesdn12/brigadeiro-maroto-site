import { createContext, Dispatch, SetStateAction } from 'react';
import Order from '../models/Order';

const OrderContext = createContext<[Order, Dispatch<SetStateAction<Order>>]>(undefined);

export default OrderContext;
