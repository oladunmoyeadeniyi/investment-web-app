import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

//Initial State
export const initialState = {
  transactions: [
    { id: "1", text: "Flower", amount: -20 },
    { id: "2", text: "Salary", amount: 300 },
    { id: "3", text: "Book", amount: -10 },
    { id: "4", text: "Camera", amount: 150 },
  ],
};

//Context Creator
export const GlobalContext = createContext(initialState);

//Context Provider
export const GlobalProvider = ({ children }) => {
  function deleteTransaction(id) {
    dispatch({
      log: console.log("Yes"),
      payload: id,
      type: "DELETE_TRANSACTION",
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
