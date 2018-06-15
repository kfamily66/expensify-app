import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "12345" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "12345"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("12345", { amount: 50 });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "12345",
    update: { amount: 50 }
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Coffee",
    amount: 300,
    note: "Just some coffee",
    createdAt: 1000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
      id: expect.any(String)
    }
  });
});
