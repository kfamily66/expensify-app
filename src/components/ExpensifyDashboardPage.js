import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilter from "./ExpenseListFilter";
import ExpensesSummary from "./ExpensesSummary";

const ExpensifyDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilter />
    <ExpenseList />
  </div>
);

export default ExpensifyDashboardPage;
