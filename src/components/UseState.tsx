import { useState, useEffect } from "react";

const UseState = () => {

    type ItemStateModel = { [key: string]: any };

    const [state, setState] = useState<number>();
    const [itemState, setItemState] = useState<ItemStateModel>();
  
    useEffect(() => {
      setState(2);
      setItemState({ name: "John", age: 13, string: "string", 123: 123 });
    }, []);

    return (
        <>
        <p>{state}</p>
        <p>{JSON.stringify(itemState)}</p>
        </>
    )
}

export default UseState;