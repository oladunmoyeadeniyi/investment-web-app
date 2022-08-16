import React from "react";

export const IncExpVal = (props) => {
  const { name, className, children } = props;
  return (
    <div>
      <h4>{name}</h4>
      <p className={className}>{children}</p>
    </div>
  );
};
