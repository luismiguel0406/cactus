import React from "react";
import { FormGroup, Label } from "reactstrap";

const CustomSelect = ({
  label,
  name,
  className = "",
  options,
  register,
  messageError = "Debes selecionar una opcion valida",
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
        style={errors[name]?.message ? { border: "1px solid red"}: { border: "1px solid green"}}
        defaultValue="0"
        {...register(name, { validate: (value)=> value !== "0" || messageError })}
        {...rest}
      >
        <option value="0">{"Selecciona una opcion"}</option>
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
