import expenses from "../fixtures/expenses";
import expensesReducer from "../../reducers/expenses";

test("should be empty by default", () => {
  const expensesState = expensesReducer(undefined, { type: "@@INIT" });
  expect(expensesState).toEqual([]);
});

test("should remove expense with existing id", () => {
  const expensesState = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  });
  expect(expensesState).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense with non-existing id", () => {
  const expensesState = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: "-1"
  });
  expect(expensesState).toEqual(expenses);
});

test("should add expense", () => {
  const newExpense = {
    id: "4",
    description: "Test expense",
    note: "",
    amount: 800,
    createdAt: 0
  };
  const expensesState = expensesReducer(expenses, {
    type: "ADD_EXPENSE",
    expense: newExpense
  });
  expect(expensesState).toEqual([...expenses, newExpense]);
});

test("should edit expense with existing id", () => {
  const update = {
    amount: 333
  };
  const expensesState = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: "1",
    update
  });
  expect(expensesState[0].amount).toBe(update.amount);
});

test("should not edit expense with non-existing id", () => {
  const update = {
    amount: 333
  };
  const expensesState = expensesReducer(expenses, {
    type: "EDIT_EXPENSE",
    id: "-1",
    update
  });
  expect(expensesState).toEqual(expenses);
});
