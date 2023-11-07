import React from "react";
import { FormGroup, Label } from "reactstrap";

const CustomSelect = ({
  label,
  name,
  className = "",
  options,
  register,
  messageError = "",
  errors,
  ...rest
}) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <select
        id={name}
        name={name}
        className={`form-control ${className}`}
        defaultValue="0"
        {...register(name, { validate: (value) => value !== "0" })}
        {...rest}
      >
        <option value="0">{"Select an option"}</option>
        {options?.map((item, idx) => (
          <option key={idx} value={item?.value}>
            {item?.label}
          </option>
        ))}
      </select>
      <span className="text-danger">{errors[name]?.message}</span>
    </FormGroup>
  );
};

export default CustomSelect;
