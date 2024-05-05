import { useState } from "react";

import "../styles/AvailableSlots.css";
import { TimeSlot } from "./ui/TimeSlot";

export const AvailableSlots = ({ data = {}, timeSlots = [] }) => {
  const [selectedSlot, setSelectedSlot] = useState(1);

  return (
    <div className="available-slots">
      <div className="slot-details">
        <p>
          {data?.[0]?.date} -{" "}
          {timeSlots?.length
            ? `${timeSlots.length} avaialable slots`
            : `No avaialable slots `}
        </p>
        <div className="slot-cards">
          {!!timeSlots?.length &&
            timeSlots?.map((slot, index) => (
              <TimeSlot
                key={index}
                slot={slot}
                selected={selectedSlot}
                onClick={setSelectedSlot}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
