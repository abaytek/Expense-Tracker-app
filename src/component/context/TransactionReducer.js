const TransactionReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transaction: [...state.transaction, action.payload],
      };
    case 'CALCULATE_INCOME':
      let incomes = state.transaction.map((transact) => transact.amount);
      let total = incomes
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0);
      return {
        ...state,
        incomeTotal: total,
      };
    case 'CALCULATE_EXPENSE':
      let incomesExp = state.transaction.map((transact) => transact.amount);
      let totalExp = incomesExp
        .filter((item) => item < 0)
        .reduce((acc, item) => (acc += item), 0);
      return {
        ...state,
        expenseTotal: totalExp,
      };
    case 'CALCULATE_TOTAL':
      return {
        ...state,
        total: state.incomeTotal + state.expenseTotal,
      };
    case 'REMOVE_TRANSACTION':
      return {
        transaction: state.transaction.filter(
          (transact) => transact.label !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default TransactionReducer;
