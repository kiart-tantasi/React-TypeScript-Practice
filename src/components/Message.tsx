type MessageProp = {
    message: string;
  };
  // const Message = ({ message }: {message: string}) => {
  const Message = ({ message }: MessageProp): JSX.Element => {
    return (
      <div className="message-box">
        <h1>{message}</h1>
      </div>
    );
  };
  
  export default Message;
  