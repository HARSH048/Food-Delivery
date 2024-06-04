import { createContext,useEffect,useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [cartItem, setCartItem] = useState({});
  const [category, setCategory] = useState("All");
  const [totalAmount,setTotalAmount] = useState(0);

  const addToCart = (itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(()=>{
    let totalAmount=0;
    for(const item in cartItem){
      if(cartItem[item] > 0){
        let foodInfo = food_list.find((product)=>product._id === item)
        if(foodInfo){
          totalAmount += foodInfo.price * cartItem[item]
        }
      }
      setTotalAmount(totalAmount);
    }
  },[cartItem])

  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    cartItem,
    setCartItem,
    category,
    setCategory,
    totalAmount
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
