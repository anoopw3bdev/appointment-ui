import { useEffect, useState } from "react";
import "../styles/CalendarContainer.css";
import { CalendarSection } from "./CalendarSection";
import { AppointmentSection } from "./AppointmentSection";
import { SectionFooter } from "./SectionFooter";
import { getDateRange } from "../utils/getDateRange";
import { getTimeSlotsUrl } from "../constants/url";
import { useFetchData } from "../hooks/useFetchData";

export const CalendarContainer = () => {
  const dateObject = getDateRange(new Date());
  const url = getTimeSlotsUrl(
    dateObject?.currentDate,
    dateObject?.nextDate
  );

  const [currentUrl, setCurrentUrl] = useState(url);
  const { data, isLoading, fetchData } = useFetchData(currentUrl);

  useEffect(() => {
    fetchData();
  }, [fetchData, currentUrl]);

  return (
    <main>
      <div>
        <div className="calendar-container">
          <CalendarSection setCurrentUrl={setCurrentUrl} />
          <AppointmentSection data={data} isLoading={isLoading} />
        </div>
        <SectionFooter />
      </div>
    </main>
  );
};
