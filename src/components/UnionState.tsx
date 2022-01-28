import React, { useState } from "react";

type ArrayState = number[];

const UnionState = () => {
  const [unionState, setUnionState] = useState<ArrayState | null | string | undefined >(null);
  const handleAddList = () => {
    setUnionState([1, 2, 3, 4, 5]);
  };
  const handleChangeState = () => {
    setUnionState("string");
  };
  const handleNullState = () => {
    setUnionState(null);
  }
  const handleUndefinedState = () => {
    setUnionState(undefined);
  }

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
      <div className="state-box"><p>{JSON.stringify(unionState)}</p></div>
      <button onClick={handleAddList}>change to array state</button>
      <button onClick={handleChangeState}>change to string state</button>
      <button onClick={handleNullState}>change to null state</button>
      <button onClick={handleUndefinedState}>change to undefined state</button>
    </>
  );
};

export default UnionState;
