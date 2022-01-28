import React from "react";

const LayoutOptionalChildren: React.FC<{
  children?: React.ReactNode;
  required: string;
}> = (props) => {
  return (
    <>
      <p>Layout with No Default Children</p>
      <p>{props.required}</p>
      <div>{props.children}</div>
    </>
  );
};

export default LayoutOptionalChildren;
