import InputForm from "./components/InputForm";
import LayoutWithChildren from "./components/LayoutWithChildren";
import LayoutOptionalChildren from "./components/LayoutOptionalChildren";
import Message from "./components/Message";
import MessageTwo from "./components/MessageTwo";
import UnionState from "./components/UnionState";
import User from "./components/User";
import UseState from "./components/UseState";

export default function App() {
  return (
    <div>
      <p className="heading">state of number & state of object</p>
      <UseState />
      <hr />
      <p className="heading">Form of Inputs</p>
      <InputForm />
      <hr />
      <p className="heading">Layout with required children and optional children</p>
      <LayoutWithChildren>
        <h4>This is required props.children.</h4>
      </LayoutWithChildren>
      <LayoutOptionalChildren></LayoutOptionalChildren>
      <hr />
      <p className="heading">Two ways of define prop type</p>
      <Message message={"1: define after param"} />
      <MessageTwo message={"2: define in React.FC<> before param"} />
      <hr />
      <p className="heading">Union State</p>
      <UnionState />
      <hr />
      <p className="heading">Context API</p>
      <User />
      <hr/>
    </div>
  );
}
