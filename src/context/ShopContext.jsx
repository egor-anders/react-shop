import { createContext, useReducer } from 'react';
import {reducer} from '../reducer';

const ShopContext = createContext();

export default ShopContext;

const initialState = {
  products: [],
  loading: true,
  order: [],
  showCart: false,
  alertName: ''
}

export const ShopContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState)

  value.closeAlert = () => {
    dispatch({type: 'CLOSE_ALERT'})
  }

  value.removeFromCart = (itemId) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
  }

  return <ShopContext.Provider value={value}>
    {children}
  </ShopContext.Provider>
} 