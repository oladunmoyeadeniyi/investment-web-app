export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transations: state.transactions.filter(
          (transaction) => transaction !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
