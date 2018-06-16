import moment from "moment";
import selectExpenses from "../../selectors/expenses";

const expenses = [
  {
    description: "Coffee",
    note: "",
    amount: 300,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    description: "Rent",
    note: "",
    amount: 1095,
    createdAt: moment(0).valueOf()
  },
  {
    description: "Gas bill",
    note: "",
    amount: 500,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];

test("should filter by text value", () => {
  const filters = {
    text: "e",
    startDate: undefined,
    endDate: undefined,
    sortBy: "date"
  };
  const selectedExpenses = selectExpenses(expenses, filters);
  expect(selectedExpenses).toEqual([expenses[1], expenses[0]]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    startDate: moment(0),
    endDate: undefined,
    sortBy: "date"
  };

  const selectedExpenses = selectExpenses(expenses, filters);
  expect(selectedExpenses).toEqual([expenses[2], expenses[1]]);
});

test("should filter by end date", () => {
  const filters = {
    text: "",
    startDate: undefined,
    endDate: moment(0),
    sortBy: "date"
  };

  const selectedExpenses = selectExpenses(expenses, filters);
  expect(selectedExpenses).toEqual([expenses[1], expenses[0]]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "date"
  };
  const selectedExpenses = selectExpenses(expenses, filters);
  expect(selectedExpenses).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const selectedExpenses = selectExpenses(expenses, filters);
  expect(selectedExpenses).toEqual([expenses[1], expenses[2], expenses[0]]);
});
