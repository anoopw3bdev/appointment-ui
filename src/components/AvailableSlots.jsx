import { useState } from "react";

import "../styles/AvailableSlots.css";
import { TimeSlot } from "./ui/TimeSlot";

export const AvailableSlots = ({ data = {}, timeSlots = {} }) => {
  const [selectedSlot, setSelectedSlot] = useState(1);

  return (
    <div className="available-slots">
      <div className="slot-details">
        <p>
          {data?.[0]?.date} - {timeSlots[60]?.length} avaialable slots
        </p>
        <div className="slot-cards">
          {!!timeSlots[60]?.length &&
            timeSlots[60]?.map((slot, index) => (
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
