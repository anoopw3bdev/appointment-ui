import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const CalendarComponent = () => {
  const [value, onChange] = useState();
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        calendarType={"gregory"}
      />
    </div>
  );
};
