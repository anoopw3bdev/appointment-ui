import { CalendarComponent } from "./Calendar";
import "../styles/CalendarSection.css";

export const CalendarSection = ({ setCurrentUrl }) => {
  return (
    <div className="calendar-section">
      <div>
        <div className="title">Test Service</div>
        <div className="timezone">
          <span>Timezone:</span>
          <span>&nbsp;Asia/ Calcutta</span>
        </div>
      </div>
      <div className="calendar-wrapper">
        <CalendarComponent setCurrentUrl={setCurrentUrl} />
      </div>
    </div>
  );
};
