import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "../features/balance/balanceSlice";



const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});

export default store;
