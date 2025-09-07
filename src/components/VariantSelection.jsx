import { CustomDropdown } from "./ui/Dropdown";
import "../styles/VariantSelection.css";

export const VariantSelection = ({
  options,
  selectedVariant,
  onSelect,
}) => {
  return (
    <div className="variant-selection">
      <div className="title">Select from variants</div>
      <CustomDropdown
        options={options}
        onSelect={onSelect}
        selectedVariant={selectedVariant}
      />
    </div>
  );
};
