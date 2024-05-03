import "../styles/CalendarContainer.css";
import { CalendarSection } from "./CalendarSection";
import { AppointmentSection } from "./AppointmentSection";
import { SectionFooter } from "./SectionFooter";

export const CalendarContainer = () => {
    return(
        <main>
            <div>
                <div className="calendar-container">
                    <CalendarSection/>
                    <AppointmentSection/>
                </div>
                <SectionFooter/>
            </div>
        </main>
    )
}