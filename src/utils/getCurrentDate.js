export const getDateRange = () => {
  const currentDate = new Date();
  const nextDate = new Date(currentDate);
  nextDate.setDate(nextDate.getDate() + 1);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return {
    currentDate: formatDate(currentDate),
    nextDate: formatDate(nextDate),
  };
};
