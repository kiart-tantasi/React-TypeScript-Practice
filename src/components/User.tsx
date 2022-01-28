import React, { useContext, useRef } from "react";
import UserContext from "../context/UserContext";

const User = () => {
  const UserCtx = useContext(UserContext);
  const {
    state: userState,
    setName,
    setAge,
    toggleWorking,
    toggleSex
  } = UserCtx; //, can't use toggleSomethingElse

  const newNameRef = useRef<HTMLInputElement>(null);
  const newNickNameRef = useRef<HTMLInputElement>(null);
  const newAgeRef = useRef<HTMLInputElement>(null);

  const handleChangeName = (e: React.FormEvent) => {
    e.preventDefault();
    // error
    if (newNameRef.current!.value === "") {
      alert("Please enter new name");
      return;
    }
    // submit (with and without nickname)
    if (newNickNameRef.current!.value) {
      setName(newNameRef.current!.value, newNickNameRef.current!.value);
    } else if (!newNickNameRef.current!.value) {
      setName(newNameRef.current!.value);
    }
    // clear
    newNameRef.current!.value = "";
    newNickNameRef.current!.value = "";
  };

  const handleChangeAge = (e: React.FormEvent) => {
    //age
    if (newAgeRef.current!.value === "") {
      alert("Please enter new age");
      return;
    }
    e.preventDefault();
    // submit
    setAge(+newAgeRef.current!.value);
    // clear
    newAgeRef.current!.value = "";
  };

  return (
    <>
      <h4>name: {userState.name}</h4>
      <h4>nickname: {userState.nickname}</h4>
      <form onSubmit={handleChangeName}>
        <input ref={newNameRef} type="text" placeholder="new name (required)" />
        <br />
        <input ref={newNickNameRef} type="text" placeholder="new nickname" />
        <br />
        <button type="submit">change name and nickname(optional)</button>
      </form>
      <hr className="short-hr" />
      <h4>age: {userState.age}</h4>
      <form onSubmit={handleChangeAge}>
        <input ref={newAgeRef} type="number" placeholder="new age" />
        <button type="submit">change age</button>
      </form>
      <hr className="short-hr" />
      <h4>sex: {userState.sex}</h4>
      <button onClick={() => toggleSex()}>change sex</button>
      <hr className="short-hr" />
      <h4>working: {userState.working ? "Yes" : "No"}</h4>
      <button onClick={() => toggleWorking()}>change working status</button>
    </>
  );
};

export default User;
