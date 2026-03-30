import { useState } from "react";
import "./Account.css";

function Account() {
  const [balance, setBalance] = useState(10000);
  const [amount, setAmount] = useState(0);
  const handleAmount = (event) => {
    setAmount(event.target.value);
    console.log(event.target.value);
  };

  const handleAdd = () => {
    setBalance(balance + Number(amount));
  };

  const handleSub = () => {
    setBalance(balance - Number(amount));
  };

  return (
    <div className="account-card">
      <h1>useState event handaler </h1>
      <p className="account-label">Current Balance</p>
      <h1 className="account-title">My Account Balance: {balance}</h1>
      <p className="account-text">Enter Amount</p>
      <input
        className="account-input"
        type="number"
        value={amount}
        onChange={handleAmount}
      />
      <div className="account-actions">
        <button
          className="account-button account-button-add"
          onClick={handleAdd}
        >
          Add Cash
        </button>
        <button
          className="account-button account-button-sub"
          onClick={handleSub}
        >
          Withdraw Balance
        </button>
      </div>
    </div>
  );
}

export default Account;
