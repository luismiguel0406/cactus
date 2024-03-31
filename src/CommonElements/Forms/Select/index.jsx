import React from "react";
import { FormGroup, Label } from "reactstrap";

const CustomSelect = ({
  label,
  name,
  className = "",
  options = [],
  defaultValue = "0",
  register,
  messageError = "Debes selecionar una opción valida",
  errors,
  isRequired = true,
  ...rest
}) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <select
        id={name}
        name={name}
        className={`form-control ${className}`}
        style={
          errors[name]?.message
            ? { border: "1px solid red" }
            : { border: "1px solid green" }
        }
        defaultValue={defaultValue}
        {...register(name, {
          validate: isRequired
            ? (value) => value !== "0" || messageError
            : null,
        })}
        {...rest}
      >
        <option value="0">Selecciona una opción</option>
        {options?.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <span className="text-danger">{errors[name]?.message}</span>
    </FormGroup>
  );
};

export default CustomSelect;
