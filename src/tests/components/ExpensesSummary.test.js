import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render ExpensesSummary without visible expenses", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1} />);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpensesSummary without visible expenses", () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={550} />);
  expect(wrapper).toMatchSnapshot();
});
