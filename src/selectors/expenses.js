import moment from "moment";

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const momentCreatedAt = moment(expense.createdAt);
      console.log(startDate);
      const startDateMatch = startDate ? momentCreatedAt.isSameOrAfter(startDate, "day") : true;
      const endDateMatch = startDate ? momentCreatedAt.isSameOrBefore(endDate, "day") : true;
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
