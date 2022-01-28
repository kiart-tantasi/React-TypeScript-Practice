import { useEffect, useState } from "react";
import Form from "./components/Form";
import Layout from "./components/Layout";
import LayoutOptionalChildren from "./components/LayoutOptionalChildren";
import Message from "./components/Message";
import MessageTwo from "./components/MessageTwo";
import NullState from "./components/NullState";
import User from "./components/User";

export default function App() {
  type ItemStateModel = { [key: string]: any };

  const [state, setState] = useState<number>();
  const [itemState, setItemState] = useState<ItemStateModel>();

  useEffect(() => {
    setState(2);
    setItemState({ name: "John", age: 13, string: "string", 123: 123 });
  }, []);

  return (
    <div className="App">
      <p>{state}</p>
      <p>{JSON.stringify(itemState)}</p>
      <hr />
      <Form />
      <hr />
      <Layout>
        <h4>This is React.ReactNode (props.children).</h4>
      </Layout>
      <LayoutOptionalChildren required="this is required"></LayoutOptionalChildren>
      <hr />
      <Message message={"a messaged passed."} />
      <MessageTwo message={"a messaged passed (React.FC)."} />
      <hr />
      <NullState />
      <hr />
      <User />
    </div>
  );
}
