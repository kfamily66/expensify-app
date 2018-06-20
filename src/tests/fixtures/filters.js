import moment from "moment";

const filters = {
  text: "",
  startDate: null,
  endDate: null,
  sortBy: "date"
};

const altFilters = {
  text: "bills",
  startDate: moment(0),
  endDate: moment(0).add(3, "days"),
  sortBy: "amount"
};

export { filters, altFilters };
