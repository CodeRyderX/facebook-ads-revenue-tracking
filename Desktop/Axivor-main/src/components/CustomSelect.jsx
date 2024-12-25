import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const CustomSelect = ({ options, className, ...props }) => {

  const [selectedValue, setSelectedValue] = useState(options[0].value);

  return (
    <Select value={selectedValue} onValueChange={setSelectedValue} {...props}>
      <SelectTrigger
        className={`rounded-full border-gray-300 focus:ring-blue-500 dark:border-gray-700 dark:focus:ring-blue-400 ${className}`}
      >
        <SelectValue /> {/* No placeholder */}
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CustomSelect;
