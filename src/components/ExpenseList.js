import React from "react";
import { connect } from "react-redux";

const ExpenseList = props => (
  <div>
    <h2>Expense list</h2>
    {props.expenses.length}
    {props.filters.text}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
