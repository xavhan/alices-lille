import { platform } from "os";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type SelectProps = ComponentPropsWithoutRef<"select"> & {
  options: { value: string; label: string }[];
  placeholder?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, placeholder, ...rest }, ref) => (
    <select
      ref={ref}
      {...rest}
      className="w-full p-2 border rounded-md border-red text-black bg-background"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
);
