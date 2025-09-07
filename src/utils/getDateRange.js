import { formatDate } from "./formatDate";

export const getDateRange = (date) => {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);

  return {
    currentDate: formatDate(date),
    nextDate: formatDate(nextDate),
  };
};
