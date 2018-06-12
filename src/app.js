import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import configureStore from "./store/configureStore";

import "normalize.css";
import "./styles/style.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 100, createdAt: 1000 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 300, createdAt: 500 }));
store.dispatch(addExpense({ description: "Rent", amount: 150000, createdAt: -1000 }));

const state = store.getState();

console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
