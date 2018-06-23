import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";
import numeral from "numeral";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const formattedTotal = numeral(expensesTotal / 100).format("$0,0.00");
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";

  return (
    <div>
      <h3>
        Viewing {expenseCount} {expenseWord} totalling {formattedTotal}
      </h3>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
