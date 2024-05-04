import { CustomDropdown } from "./ui/Dropdown";
import "../styles/VariantSelection.css";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
];

export const VariantSelection = () => {
  return (
    <div className="variant-selection">
      <div className="title">Select from variants</div>
      <CustomDropdown options={options} onSelect={() => {}} />
    </div>
  );
};
