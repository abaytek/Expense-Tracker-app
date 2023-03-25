import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TransactionState from './component/context/TransactionState';

ReactDOM.render(
  <TransactionState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionState>,
  document.getElementById('root')
);
