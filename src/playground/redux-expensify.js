import { createStore, combineReducers } from "redux";
import uuid from "uuid";

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

//
// Creating action generators
//
const addExpense = ({ description = "", note = "", amount = 0 } = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount
  }
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update
});

//
// Creating reducers with their default states
//

const defaultExpensesState = [];

const expensesReducer = (state = defaultExpensesState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(expense => expense.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update
          };
        } else {
          return expense;
        }
      });
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

const filtersReducer = (state = defaultFiltersState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//
// Creating store
//

const store = createStore(
  combineReducers({
    expences: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => console.log(store.getState()));

//
// Add and remove expense to the store
//

const itemOne = store.dispatch(
  addExpense({
    description: "January Rent",
    note: "This was the final payment for that address",
    amount: 100
  })
);

const itemTwo = store.dispatch(
  addExpense({
    description: "December Rent",
    note: "This was the payment for the flat",
    amount: 200
  })
);

store.dispatch(removeExpense({ id: itemOne.expense.id }));

store.dispatch(editExpense(itemTwo.expense.id, { amount: 1000 }));
