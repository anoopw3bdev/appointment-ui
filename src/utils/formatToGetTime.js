export const formatToGetTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);

  let hours = dateTime.getHours();
  let minutes = dateTime.getMinutes();

  const amPm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  minutes = minutes < 10 ? "0" + minutes : minutes;

  const timeString = `${hours}:${minutes} ${amPm}`;
  return timeString;
};
