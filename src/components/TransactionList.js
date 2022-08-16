import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/features/balance/balanceSlice";

export const TransactionList = () => {
  const transactions = useSelector((state) => state.balance.transactions);
  const dispatch = useDispatch();
  // const design = sign === "-" ? "minus" : "plus";
  // console.log(sign);
  console.log(transactions);
  // const sign = transactions.amount < 0 ? "-" : "+";
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((x) => (
          <li className={x.amount < 0 ? "minus" : "plus"} key={x.id}>
            {x.text}
            <span>
              {x.amount < 0 ? "-" : null}${Math.abs(x.amount)}
            </span>
            <button
              onClick={() => dispatch(deleteTransaction(x.id))}
              className="delete-btn"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

// import React, { useContext } from "react";
// import { GlobalContext } from "../context/GlobalState";
// import { Transaction } from "./Transaction";

// export const TransactionList = () => {
//   const { transactions } = useContext(GlobalContext);
//   return (
//     <>
//       <h3>History</h3>
//       <ul className="list">
//         {transactions.map((transaction) => {
//           return <Transaction key={transaction.id} transaction={transaction} />;
//         })}
//       </ul>
//     </>
//   );
// };
