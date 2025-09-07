import { weekDays } from "../constants/weekDays";
import { months } from "../constants/months";

export const formatToGetDay = (dateString) => {
  const date = new Date(dateString);

  const dayName = weekDays[date.getDay()];
  const monthName = months[date.getMonth()];

  const dayOfMonth = date.getDate();

  const formattedDate = `${dayName}, ${monthName} ${dayOfMonth}`;
  return formattedDate;
};
