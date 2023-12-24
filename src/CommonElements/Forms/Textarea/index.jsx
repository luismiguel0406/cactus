import React from "react";
import { FormGroup, Label } from "reactstrap";

const CustomTextArea = ({
  label,
  name,
  rows = 4,
  className = "",
  register,
  isRequired = true,
  messageError = "",
  errors,
  ...rest
}) => {
  let messageRequired =
    messageError === "" ? `${label} es requerido.` : messageError;

  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <textarea
        id={name}
        name={name}
        placeholder="Escribe una pequeña descripción aqui"
        className={`form-control ${className}`}
        style={
          errors[name]?.message
            ? { border: "1px solid red" }
            : { border: "1px solid green" }
        }
        rows={rows}
        {...rest}
        {...register(name, {
          required: isRequired ? messageRequired : false,
        })}
      />
      <span className="text-danger">{errors[name]?.message}</span>
    </FormGroup>
  );
};

export default CustomTextArea;
