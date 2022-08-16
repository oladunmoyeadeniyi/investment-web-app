// import React, { useContext } from "react";
import React from "react";

// import { GlobalContext } from "../context/GlobalState";
import { useSelector } from "react-redux";

import { IncExpVal } from "./units/IncExpVal";

export const IncomeExpenses = () => {
  const transactions = useSelector((state) => state.balance.transactions);
  // const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((transaction) => transaction > 0)
    .reduce((a, z) => (a += z), 0)
    .toFixed(2);
  const expense = amounts
    .filter((transaction) => transaction < 0)
    .reduce((a, z) => (a += z), 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <IncExpVal name="Income" className="money plus">
        ${income}
      </IncExpVal>
      <IncExpVal name="Expense" className="money minus">
        ${Math.abs(expense)}
      </IncExpVal>
    </div>
  );
};
