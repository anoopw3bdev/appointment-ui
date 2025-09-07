export const getTimeSlotsUrl = (startDate, endDate) => {
  const url = `https://app.appointo.me/scripttag/mock_timeslots?start_date=${startDate}&end_date=${endDate}`;
  return url;
};
