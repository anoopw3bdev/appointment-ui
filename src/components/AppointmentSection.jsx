import { VariantSelection } from "./VariantSelection";
import { AvailableSlots } from "./AvailableSlots";
import "../styles/AppointmentSection.css";
import { useFetchData } from "../hooks/useFetchData";

export const AppointmentSection = () => {
  const { data, loading, error, fetchData } = useFetchData();

  return (
    <div className="appointment-section">
      <VariantSelection />
      <AvailableSlots />
    </div>
  );
};
