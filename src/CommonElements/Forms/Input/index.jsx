import React from "react";
import { FormGroup, Label, InputGroup } from "reactstrap";
import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";

const CustomInput = ({
  label,
  name,
  className = "",
  type = "text",
  register,
  control = null,
  messageError = "",
  iconClassName = "",
  isMasked = false,
  mask = "",
  onClick,
  errors,
  isRequired = true,
  otherRules = {},
  ...rest
}) => {
  let messageRequired =
    messageError === "" ? `${label} es requerido.` : messageError;
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      {!isMasked ? (
        <InputGroup>
          <input
            id={name}
            type={type}
            name={name}
            style={
              errors[name]?.message
                ? { border: "1px solid red" }
                : { border: "1px solid green" }
            }
            className={`form-control ${className}`}
            {...register(name, {
              required: isRequired ? messageRequired : false,
              ...otherRules,
            })}
            {...rest}
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
      ) : (
        <InputGroup>
          <Controller
            name={name}
            control={control}
            rules={{
              required: isRequired ? messageRequired : false,
              ...otherRules,
            }}
            render={({ field }) => (
              <InputMask
                name={name}
                mask={mask}
                alwaysShowMask
                className={`form-control ${className}`}
                style={
                  errors[name]?.message
                    ? { border: "1px solid red" }
                    : { border: "1px solid green" }
                }
                {...field}
                onChange={field.onChange}
              />
            )}
          />
        </InputGroup>
      )}

      <span className="text-danger">{errors[name]?.message}</span>
    </FormGroup>
  );
};

export default CustomInput;
