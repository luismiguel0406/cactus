import React from "react";
import { FormGroup, Label } from "reactstrap";

const CustomTextArea = ({
  label,
  name,
  rows,
  className = "",
  register,
  messageError = "",
  errors,
  ...rest
}) => {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <textarea
        id={name}
        name={name}
        placeholder="Type a little description here"
        className={`form-control ${className}`}
        rows={rows}
        {...rest}
        {...register(name, {
          required:
            messageError === "" ? `${label} is required.` : messageError,
        })}
        />      
      <span className="text-danger">{errors[name]?.message}</span>
    </FormGroup>
  );
};

export default CustomTextArea;