import { CiCircleCheck } from "react-icons/ci";
import { formatToGetTime } from "../../utils/formatToGetTime";
import "../../styles/ui/TimeSlot.css";

export const TimeSlot = ({ slot, selected, onClick = () => {} }) => {
  return (
    <div
      className={`slot ${selected === slot.id ? "selected" : ""}`}
      onClick={() => onClick(slot.id)}
    >
      {formatToGetTime(slot?.start_time)} -{" "}
      {formatToGetTime(slot?.end_time)}
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
