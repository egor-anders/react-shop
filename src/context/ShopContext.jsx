import { createContext, useReducer } from "react";
import { reducer } from "../reducer";

const ShopContext = createContext();

export default ShopContext;

const initialState = {
  products: [],
  loading: true,
  order: [],
  showCart: false,
  alertName: "",
};

export const ShopContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: itemId } });
  };

  value.addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  value.increaseQuantity = (itemId) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: { id: itemId } });
  };

  value.decreaseQuantity = (itemId) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: { id: itemId } });
  };

  value.toggleShowCart = () => {
    dispatch({ type: "TOGGLE_SHOW_CART" });
  };

  value.setProducts = (data) => {
    dispatch({type: 'SET_PRODUCTS', payload: data})
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
