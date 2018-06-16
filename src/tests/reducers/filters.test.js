import moment from "moment";
import filterReducer from "../../reducers/filters";

test("should set default filtersState", () => {
  const filtersState = filterReducer(undefined, "@@INIT");
  expect(filtersState).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set text filter", () => {
  const textFilter = "test";
  const filtersState = filterReducer(undefined, { type: "SET_TEXT_FILTER", text: textFilter });
  expect(filtersState.text).toBe(textFilter);
});

test("should set sort to amount", () => {
  const filtersState = filterReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(filtersState.sortBy).toBe("amount");
});

test("should set sort to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  };

  const filtersState = filterReducer(currentState, { type: "SORT_BY_DATE" });
  expect(filtersState.sortBy).toBe("date");
});

test("should set startDate", () => {
  const newStartDate = moment(0);
  const filtersState = filterReducer(undefined, { type: "SET_START_DATE", startDate: newStartDate });
  expect(filtersState.startDate).toEqual(newStartDate);
});

test("should set endDate", () => {
  const newEndDate = moment(0);
  const filtersState = filterReducer(undefined, { type: "SET_END_DATE", endDate: newEndDate });
  expect(filtersState.endDate).toEqual(newEndDate);
});
