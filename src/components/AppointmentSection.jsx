import { useState } from "react";
import { useFetchData } from "../hooks/useFetchData";
import { VariantSelection } from "./VariantSelection";
import { AvailableSlots } from "./AvailableSlots";
import "../styles/AppointmentSection.css";
import { variants } from "../constants/availableVariants";
import { getDateRange } from "../utils/getCurrentDate";
import { getTimeSlotsUrl } from "../constants/url";
import { groupMeetingsByDuration } from "../utils/groupMeetingByDuration";

export const AppointmentSection = () => {
  const [selectedVariant, setSelectedVariant] = useState(variants[2]);

  const dateObject = getDateRange();
  const url = getTimeSlotsUrl(
    dateObject?.currentDate,
    dateObject?.nextDate
  );

  const { data, isLoading } = useFetchData(url);

  let timeSlots = {};
  if (data?.length) {
    timeSlots = { ...groupMeetingsByDuration(data?.[0].slots) } || [];
    timeSlots = timeSlots[selectedVariant?.value];
  }

  const onVariantSelect = (val) => {
    setSelectedVariant(val);
  };

  return (
    <div className="appointment-section">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <VariantSelection
            options={variants}
            selectedVariant={selectedVariant}
            onSelect={onVariantSelect}
          />
          <AvailableSlots data={data} timeSlots={timeSlots} />
        </>
      )}
    </div>
  );
};
