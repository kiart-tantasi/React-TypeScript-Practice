import React, { useState } from "react";

type ArrayState = number[];

const NullState = () => {
  const [nullState, setNullState] = useState<ArrayState | null | string>();
  const handleAddList = () => {
    setNullState([1, 2, 3, 4, 5]);
  };
  const handleChangeState = () => {
    setNullState("string");
  };

  // const [nullArray, setNullArray] = React.useState<ArrayState | null>(null);
  // const handleSetArray = () => {
  //   setNullArray([1, 2, 3, 4.5]);
  // };
  // const handleSetString = () => {
  //   setNullArray(null); // allowed
  //   setNullArray("12345"); //not allowed
  // };

  return (
    <>
      <p>{JSON.stringify(nullState)}</p>
      <button onClick={handleAddList}>change to array state</button>
      <button onClick={handleChangeState}>change to string state</button>
    </>
  );
};

export default NullState;
