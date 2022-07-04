export default function buildCalendar(date) {
  //date objects are mutable so we use clone so we don't actually change the value of the date
  //take the start day of the month, find the beginning of that week
  const startDay = date.clone().startOf("month").startOf("week");
  const endDay = date.clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");
  const calendar = [];
  //creates a matrix containing every day between the start day and end day with rows of 7
  while (day.isBefore(endDay, "day")) {
    calendar.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone())
    );
  }
  return calendar;
}
