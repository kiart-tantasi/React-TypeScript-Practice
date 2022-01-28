import React, { useRef, useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmitText = (e: React.FormEvent) => {
    e.preventDefault();
    alert(text);
    setText("");
  };

  const handleSubmitTextTwo = (e: React.FormEvent) => {
    e.preventDefault();
    alert(inputRef.current!.value);
    inputRef.current!.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmitText}>
        <input
          type="text"
          placeholder="useState"
          value={text}
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <form onSubmit={handleSubmitTextTwo}>
        <input type="text" placeholder="useRef" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
