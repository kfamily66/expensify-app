import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilter } from "../../components/ExpenseListFilter";
import { filters, altFilters } from "../fixtures/filters";

let wrapper, setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount;

beforeEach(() => {
  setTextFilter = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilter
      filters={filters}
      setTextFilter={setTextFilter}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
    />
  );
});

test("should render ExpenseListFilter with default data", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilter with provided filters", () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const newFilter = "newFilter";
  wrapper.find("input").simulate("change", { target: { value: newFilter } });
  expect(setTextFilter).toHaveBeenLastCalledWith(newFilter);
});

test("should handle change sortBy to amount ", () => {
  wrapper.find("select").simulate("change", { target: { value: "amount" } });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle change sortBy to amount ", () => {
  wrapper.setProps({ filters: altFilters });
  wrapper.find("select").simulate("change", { target: { value: "date" } });
  expect(sortByDate).toHaveBeenCalled();
});

test("should handle data changes", () => {
  const newStartDate = moment(0).subtract(3, "days");
  const newEndDate = moment(0).add(1, "days");

  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
    startDate: newStartDate,
    endDate: newEndDate
  });
  expect(setStartDate).toHaveBeenLastCalledWith(newStartDate);
  expect(setEndDate).toHaveBeenLastCalledWith(newEndDate);
});

test("should handle date focus change", () => {
  const focusedInput = "startDate";
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(focusedInput);
  expect(wrapper.state("focused")).toBe(focusedInput);
});
