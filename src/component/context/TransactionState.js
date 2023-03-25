import { useMemo, useReducer } from 'react';
import TransactionContext from './TransactionContext';
import TransactionReducer from './TransactionReducer';

const TransactionState = ({ children }) => {
  const initialState = {
    transaction: localStorage.getItem('transactions')
      ? JSON.parse(localStorage.getItem('transactions'))
      : [],
    total: localStorage.getItem('total')
      ? JSON.parse(localStorage.getItem('total'))
      : 0,
    incomeTotal: localStorage.getItem('incomeTotal')
      ? JSON.parse(localStorage.getItem('incomeTotal'))
      : 0,
    expenseTotal: localStorage.getItem('expenseTotal')
      ? JSON.parse(localStorage.getItem('expenseTotal'))
      : 0,
  };
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  localStorage.setItem('transactions', JSON.stringify(state.transaction));

  const addTransaction = (item) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: item });
  };
  const removeTransaction = (item) => {
    dispatch({ type: 'REMOVE_TRANSACTION', payload: item });
  };
  const calculateIncomeTotal = (item) => {
    dispatch({ type: 'CALCULATE_INCOME', payload: item });
  };
  const calculateExpenseTotal = (item) => {
    dispatch({ type: 'CALCULATE_EXPENSE', payload: item });
  };
  const calculateTotal = (item) => {
    dispatch({ type: 'CALCULATE_TOTAL', payload: item });
  };

  useMemo(() => {
    calculateIncomeTotal(state.transaction);
    calculateExpenseTotal(state.transaction);
    calculateTotal(state.transaction);
  }, [state.transaction]);

  return (
    <TransactionContext.Provider
      value={{
        transaction: state.transaction,
        incomeTotal: state.incomeTotal,
        expenseTotal: state.expenseTotal,
        total: state.total,
        expenseFlag: state.expenseFlag,
        addTransaction,
        removeTransaction,
        calculateTotal,
        calculateIncomeTotal,
        calculateExpenseTotal,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
export default TransactionState;
