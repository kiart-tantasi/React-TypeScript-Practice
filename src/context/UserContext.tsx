import React, { useReducer } from "react";

const initialState = {
  name: "Johnie Walker",
  nickname: "Johny",
  age: 20,
  sex: "male",
  working: true
};

type State = typeof initialState;
type Action =
  | {
      type: "CHANGE_NAME";
      payload: { name: string; nickname?: string };
    }
  | { type: "CHANGE_AGE"; payload: { age: number } }
  | { type: "TOGGLE_SEX" }
  | { type: "TOGGLE_WORKING" };
interface Context {
  state: State;
  setName: (name: string, nickname?: string) => void;
  setAge: (age: number) => void;
  toggleSex: () => void;
  toggleWorking: () => void;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      if (action.payload.nickname) {
        return {
          ...state,
          name: action.payload.name,
          nickname: action.payload.nickname
        };
      }
      return { ...state, name: action.payload.name };

    case "CHANGE_AGE":
      return { ...state, age: action.payload.age };
    case "TOGGLE_SEX":
      return { ...state, sex: state.sex === "male" ? "female" : "male" };
    case "TOGGLE_WORKING":
      return { ...state, working: !state.working };
    // case "CHANGE_SOMETHING_ELSE":
    //   alert("error oops!");
    default:
      return state;
  }
};

const UserContext = React.createContext<Context>({
  state: initialState,
  setName: () => {},
  setAge: () => {},
  toggleSex: () => {},
  toggleWorking: () => {}
});

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userState, dispatch] = useReducer(reducer, initialState);

  const setName = (name: string, nickname?: string) => {
    if (nickname) {
      dispatch({
        type: "CHANGE_NAME",
        payload: { name: name, nickname: nickname }
      });
      return;
    }
    dispatch({
      type: "CHANGE_NAME",
      payload: { name: name }
    });
  };

  const setAge = (age: number) => {
    dispatch({ type: "CHANGE_AGE", payload: { age: age } });
  };

  const toggleSex = () => {
    dispatch({ type: "TOGGLE_SEX" });
  };

  const toggleWorking = () => {
    dispatch({ type: "TOGGLE_WORKING" });
  };

  const toggleSomethingElse = () => {
    alert("Opps! error...");
  };

  const context = {
    state: userState,
    setName,
    setAge,
    toggleSex,
    toggleWorking,
    toggleSomethingElse
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
