import { useState } from "react";

import "../styles/AvailableSlots.css";
import { TimeSlot } from "./ui/TimeSlot";

const slots = [
  {
    id: "1",
    time: "03:30 AM - 04: 00 AM",
  },
  {
    id: "2",
    time: "03:30 AM - 04: 00 AM",
  },
  {
    id: "3",
    time: "03:30 AM - 04: 00 AM",
  },
  {
    id: "4",
    time: "03:30 AM - 04: 00 AM",
  },
];

export const AvailableSlots = () => {
  const [selectedSlot, setSelectedSlot] = useState(1);

  return (
    <div className="available-slots">
      <div className="slot-details">
        <p>Thursay dec 2 - 2 avaialable slots</p>
        <div className="slot-cards">
          {slots.map((slot, index) => (
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
