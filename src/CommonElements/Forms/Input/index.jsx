import React from "react";
import { FormGroup, Label, InputGroup } from "reactstrap";

const CustomInput = ({
  label,
  name,
  className = "",
  type,
  register,
  messageError = "",
  iconClassName = "",
  onClick,
  errors,
  isRequired = true,
  ...rest
}) => {
  let messageRequired = messageError === ""
  ? `${label} is required.`
  : messageError
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <InputGroup>
        <input
          id={name}
          type={type}
          name={name}
          className={`form-control ${className}`}
          {...rest}
          {...register(name, {
            required: isRequired
              ? messageRequired
              : false,
          })}
        />
        {iconClassName !== "" ? (
          <button
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          >
            <i className={iconClassName}></i>
          </button>
        ) : null}
      </InputGroup>
      <span className="text-danger">{errors[name]?.message}</span>
    </FormGroup>
  );
};

export default CustomInput;
