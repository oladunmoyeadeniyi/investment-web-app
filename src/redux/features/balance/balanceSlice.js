import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [
    { id: "1", text: "Flower", amount: -20 },
    { id: "2", text: "Salary", amount: 300 },
    { id: "3", text: "Book", amount: -10 },
    { id: "4", text: "Camera", amount: 150 },
  ],
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    // net: (state) => {
    //   state.transactions = state.transactions.amount;
    // },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(
        (trans) => trans.id !== action.payload
      );
    },
    addTransaction: (state, action) => {
      state.transactions = [action.payload, ...state.transactions];
    },
  },
});

export default balanceSlice.reducer;
export const { addTransaction, deleteTransaction } = balanceSlice.actions;
