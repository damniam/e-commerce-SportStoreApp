import { createStore } from "redux";
import { ShopReducer } from "./ShopReducer";
import { CartReducer } from "./CardReducer";
import { CommonReducer } from "./CommonReducer";

export const SportsStoreDataStore = createStore(
  CommonReducer(ShopReducer, CartReducer)
);
