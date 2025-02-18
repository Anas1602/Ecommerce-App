/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [carItems, setCarItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    let cartData = structuredClone(carItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCarItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in carItems) {
      for (const item in carItems[items]) {
        try {
          if (carItems[items][item] > 0) {
            totalCount += carItems[items][item];
          }
        } catch (error) {
          console.log("ok");
        }
      }
    }
    return totalCount;
  };

  const updateQty = async (itemId, size, quantity) => {
    let cartData = structuredClone(carItems);
    cartData[itemId][size] = quantity;

    setCarItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in carItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in carItems[items]) {
        try {
          if (carItems[items][item] > 0) {
            totalAmount += itemInfo.price * carItems[items][item];
          }
        } catch (error) {
          console.log("ok");
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    carItems,
    addToCart,
    getCartCount,
    updateQty,
    getCartAmount,
    navigate,
  };
  return (
    // eslint-disable-next-line react/prop-types
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
