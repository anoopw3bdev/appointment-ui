import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { getDateRange } from "../utils/getDateRange";
import { getTimeSlotsUrl } from "../constants/url";

export const CalendarComponent = ({ setCurrentUrl }) => {
  const [value, onChange] = useState();

  const handleClickDate = (val) => {
    const dateObject = getDateRange(val);
    const url = getTimeSlotsUrl(
      dateObject?.currentDate,
      dateObject?.nextDate
    );
    setCurrentUrl(url);
  };

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType={"gregory"}
        onClickDay={handleClickDate}
      />
    </div>
  );
};
