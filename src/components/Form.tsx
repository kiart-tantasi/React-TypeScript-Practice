import React, { useRef, useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleButton = () => {
    console.log(text);
    setText("");
  };

  const handleButtonTwo = () => {
    console.log(inputRef.current!.value);
    inputRef.current!.value = "";
  };

  return (
    <div>
      <input
        type="text"
        placeholder="useState"
        value={text}
        onChange={handleInput}
      />
      <button onClick={handleButton}>Submit</button>
      <br />
      <br />
      <input type="text" placeholder="useRef" ref={inputRef} />
      <button onClick={handleButtonTwo}>Submit</button>
    </div>
  );
};

export default Form;
