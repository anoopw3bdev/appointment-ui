import { CiCircleCheck } from "react-icons/ci";
import { formatToGetTime } from "../../utils/formatToGetTime";
import "../../styles/ui/TimeSlot.css";

export const TimeSlot = ({
  slot,
  selected,
  onClick = () => {},
  currentId,
}) => {
  return (
    <div
      className={`slot ${selected === currentId ? "selected" : ""}`}
      onClick={() => onClick(currentId)}
    >
      {formatToGetTime(slot?.start_time)} -{" "}
      {formatToGetTime(slot?.end_time)}
      {selected === currentId && (
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
