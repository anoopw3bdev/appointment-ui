import { useState } from "react";
import { VariantSelection } from "./VariantSelection";
import { AvailableSlots } from "./AvailableSlots";
import "../styles/AppointmentSection.css";
import { variants } from "../constants/availableVariants";
import { groupMeetingsByDuration } from "../utils/groupMeetingByDuration";

export const AppointmentSection = ({ data, isLoading }) => {
  const [selectedVariant, setSelectedVariant] = useState(variants[2]);

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
          <AvailableSlots
            data={data}
            timeSlots={timeSlots}
            selectedVariant={selectedVariant}
          />
        </>
      )}
    </div>
  );
};
