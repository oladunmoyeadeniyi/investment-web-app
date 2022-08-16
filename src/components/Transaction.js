import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  console.log(transaction.id.toString());
  return (
    <>
      <li className={sign === "-" ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button onClick={() => deleteTransaction()} className="delete-btn">
          x
        </button>
      </li>
    </>
  );
};
