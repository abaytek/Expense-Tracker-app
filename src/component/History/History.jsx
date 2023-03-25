import { useContext } from 'react';
import TransactionContext from '../context/TransactionContext';
import './History.css';

const History = () => {
  const { transaction, removeTransaction } = useContext(TransactionContext);
  const handleDelete = (item) => {
    removeTransaction(item);
  };
  return (
    <div className="history">
      <h3 className="history__head">History</h3>
      {transaction?.map((item, idx) =>
        item.amount < 0 ? (
          <div className="history__message expense" key={idx}>
            <p className="history__text">{item.label} </p>
            <p className="history__text">{item.amount} 💸</p>
            <span onClick={() => handleDelete(item.label)}>x</span>
          </div>
        ) : (
          <div className="history__message" key={idx}>
            <p className="history__text">{item.label}</p>
            <p className="history__text">{item.amount} 💸</p>
            <span onClick={() => handleDelete(item.label)}>x</span>
          </div>
        )
      )}
    </div>
  );
};

export default History;
