import "./App.css";
// import { GlobalProvider } from "./context/GlobalState";

import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
function App() {
  document.title = "Balance";

  return (
    <>
      {/* <GlobalProvider> */}
      <Header title="Expense Tracker" />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      {/* </GlobalProvider> */}
    </>
  );
}

export default App;
