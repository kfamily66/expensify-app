import moment from "moment";

export default [
  {
    id: "1",
    description: "Coffee",
    note: "",
    amount: 300,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 1095,
    createdAt: moment(0).valueOf()
  },
  {
    id: "3",
    description: "Gas bill",
    note: "",
    amount: 500,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
