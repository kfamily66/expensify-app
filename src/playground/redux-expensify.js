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
// Creating action generators for expensesReducer
//
const addExpense = ({ description = "", note = "", amount = 0, createdAt } = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
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
// Creating action generators for filtersReducer
//

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
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
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
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

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = text === "" || expense.description.toLowerCase().includes(text.toLowerCase());

      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

store.subscribe(() => {
  const state = store.getState();
  console.log(getVisibleExpenses(state.expences, state.filters));
});

//
// Add and remove expense to the store
//

const itemOne = store.dispatch(
  addExpense({
    description: "January Rent",
    note: "This was the final rent payment for that address",
    amount: 4000,
    createdAt: -3000
  })
);

const itemTwo = store.dispatch(
  addExpense({
    description: "December Rent",
    note: "Coffee",
    amount: 2000,
    createdAt: -1000
  })
);

// store.dispatch(removeExpense({ id: itemOne.expense.id }));
// store.dispatch(editExpense(itemTwo.expense.id, { amount: 1000 }));

// store.dispatch(setTextFilter("coffee"));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1001));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(0));
// store.dispatch(setEndDate());
