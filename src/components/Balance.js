// import React, { useContext } from "react";
import React from "react";

// import { GlobalContext } from "../context/GlobalState";
import { useSelector } from "react-redux";

// import { net } from "../redux/features/balance/balanceSlice";

export const Balance = () => {
  const transactions = useSelector((state) => state.balance.transactions);
  // const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((a, z) => (a += z), 0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{`$${total}`}</h1>
    </div>
  );
};
