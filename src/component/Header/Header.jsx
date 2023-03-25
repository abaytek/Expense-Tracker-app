import { useContext } from 'react';
import TransactionContext from '../context/TransactionContext';
import './Header.css';

const Header = () => {
  const { total } = useContext(TransactionContext);

  return (
    <div className="header">
      <h2>Expense Tracker</h2>
      <div className="header__balance">
        <h3>Your balance</h3>
        <p>{total} 💸</p>
      </div>
    </div>
  );
};

export default Header;
