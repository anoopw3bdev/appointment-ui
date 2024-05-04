import { useState } from "react";

import { VariantSelection } from "./VariantSelection";
import { AvailableSlots } from "./AvailableSlots";
import "../styles/AppointmentSection.css";
import { useFetchData } from "../hooks/useFetchData";
import { variants } from "../constants/AvailableVariants";

export const AppointmentSection = () => {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const onVariantSelect = (val) => {
    setSelectedVariant(val);
  };

  return (
    <div className="appointment-section">
      <VariantSelection
        options={variants}
        selectedVariant={selectedVariant}
        onSelect={onVariantSelect}
      />
      <AvailableSlots />
    </div>
  );
};
