import moment from "moment";

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const momentCreatedAt = moment(expense.createdAt);
      const startDateMatch = startDate ? momentCreatedAt.isSameOrAfter(startDate, "day") : true;
      const endDateMatch = endDate ? momentCreatedAt.isSameOrBefore(endDate, "day") : true;
      const textMatch = text === "" || expense.description.toLowerCase().includes(text.toLowerCase());

      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
