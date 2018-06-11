import { createStore } from "redux";

//Actions generators

//Using ES6 object desctricturing for arguments of this function:
const increment = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrement = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const set = ({ count }) => ({
  type: "SET",
  count
});

const reset = () => ({
  type: "RESET"
});

// Creating the redux store and hanlders for possible actions with state
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };

    case "SET":
      return {
        count: action.count
      };

    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => console.log(store.getState()));
// unsubscribe();  // Use unsubscribe to stop tracking changes of state

// Changing state without action generators. There are many possibilites for typos without throwing error.
store.dispatch({
  type: "INCREMENT",
  incrementBy: 5
});
store.dispatch({
  type: "RESET"
});
store.dispatch({
  type: "DECREMENT",
  decrementBy: 3
});
store.dispatch({
  type: "SET",
  count: 101
});

// Changing state with action generators. Every typo will cause clear error.
store.dispatch(increment({ incrementBy: 1000 }));
store.dispatch(decrement({ decrementBy: 500 }));
store.dispatch(set({ count: 200 }));
store.dispatch(reset());
