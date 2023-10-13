import { useContext, useState } from 'react';
import TransactionContext from '../context/TransactionContext';
import './AddTransaction.css';

const AddTransaction = () => {
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');
  const {
    addTransaction,
    calculateIncomeTotal,
    calculateExpenseTotal,
    calculateTotal,
    transaction,
  } = useContext(TransactionContext);

  const handleClick = () => {
    if(!(label && amount)) return;

      const data = { label, amount: parseFloat(amount) };
      addTransaction(data);

      calculateExpenseTotal(transaction);
      calculateIncomeTotal(transaction);
      calculateTotal(transaction);
  

    setLabel('');
    setAmount('');
  };
  return (
    <div className="addTransaction">
      <h3>Add Transaction</h3>
      <div className="transaction___input">
        <label>Transaction Name</label>
        <input
          type="text"
          placeholder="Salary"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <div className="transaction___input">
        <label>Amount</label>
        <input
          type="number"
          placeholder="Amount (use -ve for expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button className="addTransaction__btn" onClick={handleClick}>
        Add Transaction
      </button>
    </div>
  );
};

export default AddTransaction;
