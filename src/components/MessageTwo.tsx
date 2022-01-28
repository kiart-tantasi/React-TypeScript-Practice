import React from "react";

type MessageProp = {
  message: string;
};

// const MessageTwo: React.FC<MessageProp> = (props) => {
const MessageTwo: React.FC<MessageProp> = ({ message }): JSX.Element => { // You can add ': JSX.Element' after ({message}) to define return type (optional)
  return (
    <div className="message-box">
      {/* <h1>{props.message}</h1> */}
      <h1>{message}</h1>
    </div>
  );
};

export default MessageTwo;
