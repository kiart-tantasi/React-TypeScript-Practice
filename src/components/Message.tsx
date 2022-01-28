type MessageProp = {
    message: string;
  };
  // const Message = ({ message }: {message: string}) => {
  const Message = ({ message }: MessageProp): JSX.Element => { // ': JSX.Element' <-- return type is optional
    return (
      <div className="message-box">
        <h1>{message}</h1>
      </div>
    );
  };
  
  export default Message;
  