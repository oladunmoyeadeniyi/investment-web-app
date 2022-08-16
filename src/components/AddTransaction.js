import React, { useState, useContext } from "react";
import InputField from "./units/InputField";
// import { GlobalContext } from "../context/GlobalState";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/features/balance/balanceSlice";

export const AddTransaction = () => {
  const [inputElement, setInputElement] = useState({ text: "", amount: 0 });
  // const { addTransaction } = useContext(GlobalContext);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputElement({ ...inputElement, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransation = {
      id: Math.floor(Math.random() * 100),
      text: inputElement.text,
      amount: +inputElement.amount,
    };
    dispatch(addTransaction(newTransation));
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <InputField
            label="Test"
            type="text"
            placeholder="Enter text..."
            name="text"
            value={inputElement.text}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <InputField
            type="number"
            placeholder="Enter amount..."
            name="amount"
            value={inputElement.amount}
            onChange={handleChange}
          >
            Amount <br /> (negative - expense, positive - income)
          </InputField>
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
};
