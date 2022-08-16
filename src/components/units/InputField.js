import React from "react";

const InputField = (props) => {
  const {
    type = "text",
    label,
    placeholder,
    name,
    children,
    value,
    ...rest
  } = props;

  return (
    <>
      {label ? (
        <label htmlFor={name}>{label}</label>
      ) : (
        <label htmlFor={name}>{children}</label>
      )}
      <input type={type} name={name} {...rest} />
    </>
  );
};
export default InputField;
