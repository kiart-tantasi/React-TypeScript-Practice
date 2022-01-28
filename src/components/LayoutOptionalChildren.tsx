import React from "react";

const LayoutOptionalChildren: React.FC<{
  children?: React.ReactNode;
}> = (props) => {
  return (
    <>
      <div><h4>This is optional props.children.</h4></div>
      {props.children && <div>{props.children}</div>}
      {props.children && <p>props.children received.</p>}
    </>
  );
};

export default LayoutOptionalChildren;
