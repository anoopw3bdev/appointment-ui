import { useState } from "react";

import "../styles/AvailableSlots.css";
import { TimeSlot } from "./ui/TimeSlot";
import { formatToGetDay } from "../utils/formatToGetDay";

export const AvailableSlots = ({
  data = {},
  timeSlots = [],
  selectedVariant,
}) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  return (
    <div className="available-slots">
      <div className="slot-details">
        <p>
          {formatToGetDay(data?.[0]?.date)} -{" "}
          {timeSlots?.length
            ? `${timeSlots.length} available slots`
            : `No available slots for ${selectedVariant?.label}`}
        </p>
        <div className="slot-cards">
          {!!timeSlots?.length &&
            timeSlots?.map((slot, index) => (
              <TimeSlot
                key={index}
                slot={slot}
                selected={selectedSlot}
                onClick={setSelectedSlot}
                currentId={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
