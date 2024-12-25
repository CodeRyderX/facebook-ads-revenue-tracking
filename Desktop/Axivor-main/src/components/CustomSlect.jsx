// src/components/CustomSelect.jsx

import { Select } from "./ui/select";

const CustomSelect = ({ ...props }) => {
  return (
    <Select {...props} className="custom-class-name" />
  );
};

export default CustomSelect;
