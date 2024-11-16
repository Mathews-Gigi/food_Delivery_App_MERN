import { createContext, useEffect, useState } from "react";
import { food_list } from "../../assets/frontend_assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  //since for all items a state is created this is not a best practise from ##./FoodItems.jsx

  const [cartItems, setCartItems] = useState({});

  //functionallity for  add to cart

  const addTOCart = (itemId) => {
    // if adding a product first time with this id
    // one instance is created for that product
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // add increce the value by onne
  // remove decrease value by 1
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addTOCart,
    removeFromCart,
    getTotalCartAmount,
  };
  return (
    <>
      <StoreContext.Provider value={contextValue}>
        {props.children}
      </StoreContext.Provider>
    </>
  );
};

export default StoreContextProvider;
