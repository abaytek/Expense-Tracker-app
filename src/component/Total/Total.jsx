import { useContext } from 'react';
import TransactionContext from '../context/TransactionContext';
import './Total.css';

const Total = () => {
  const { incomeTotal, expenseTotal } = useContext(TransactionContext);
  return (
    <div className="total">
      <div className="total__income">
        <h3>Income</h3>
        <p>{incomeTotal} 💸</p>
      </div>
      <div className="total__expense">
        <h3>Expense</h3>
        <p>{expenseTotal} 💸</p>
      </div>
    </div>
  );
};

export default Total;
