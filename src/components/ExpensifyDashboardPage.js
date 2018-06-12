import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";

const ExpensifyDashboardPage = () => (
  <div>
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpensifyDashboardPage;
