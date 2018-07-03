import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "123"
  };
  const newState = authReducer({}, action);
  expect(newState.uid).toEqual(action.uid);
});

test("should clear uid for logout", () => {
  const action = {
    type: "LOGOUT"
  };
  const newState = authReducer({ uid: "12345" }, action);
  expect(newState).toEqual({});
});
