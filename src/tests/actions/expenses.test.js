import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  removeExpense,
  editExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense,
  startEditExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const uid = "fdgdjgslkdgSDGJSDG";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const expenseData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expenseData[id] = { description, note, amount, createdAt };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expenseData)
    .then(() => done());
});

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "12345" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "12345"
  });
});

test("should remove expense from firebase", done => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id
      });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toBe(null);
      done();
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
  const expenseData = expenses[2];
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("should add expense to database and store", done => {
  const store = createMockStore(defaultAuthState);
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "New mouse",
    createdAt: 1000
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with default values to database and store", done => {
  const store = createMockStore(defaultAuthState);
  const defaultValues = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...defaultValues
        }
      });

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(defaultValues);
      done();
    });
});

test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("should fetch the expenses from firebase", done => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
    done();
  });
});

test("should edit expense from firebase", done => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;
  const update = {
    amount: 5000,
    description: "New car"
  };
  store
    .dispatch(startEditExpense(id, update))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        update
      });
      return database.ref(`users/${uid}/expenses/${id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual({
        amount: update.amount,
        description: update.description,
        note: expenses[1].note,
        createdAt: expenses[1].createdAt
      });
      done();
    });
});
