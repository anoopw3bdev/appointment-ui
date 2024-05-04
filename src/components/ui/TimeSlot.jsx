import { CiCircleCheck } from "react-icons/ci";

import "../../styles/ui/TimeSlot.css";

export const TimeSlot = ({ slot, selected, onClick = () => {} }) => {
  return (
    <div
      className={`slot ${selected === slot.id ? "selected" : ""}`}
      onClick={() => onClick(slot.id)}
    >
      {slot.time}
      {selected === slot.id && (
        <CiCircleCheck
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            strokeWidth: 1.4,
          }}
        />
      )}
    </div>
  );
};
