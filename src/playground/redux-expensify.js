import { createStore, combineReducers } from "redux";

// const demoState = {
//   expences: [
//     {
//       id: "jfsdfkjsfjd",
//       description: "January Rent",
//       note: "This was the final paynemt for that address",
//       amount: 54500, //using pences
//       createdAt: 0
//     }
//   ],
//   filters: {
//     text: "rent",
//     sortBy: "amount", //date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };

const defaultExpensesState = [];

const expensesReducer = (state = defaultExpensesState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

const defaultFiltersState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = defaultFiltersState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expences: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());
