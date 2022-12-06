import "./App.css";
import { createContext, useReducer, useState } from "react";
// import ParentsComponents from "./components/ParentsComponents/ParentsComponents";

export const Counter_Context = createContext();

function App() {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
      return state + 1;
    } else if (action.type === "DECREMENT") {
      return state - 1;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // const [number, setNumber] = useState(0);

  // const incrise = () => {
  //   setNumber(number + 1);
  // };

  // const decrise = () => {
  //   setNumber(number - 1);
  // };

  // const value = { incrise, decrise, number, setNumber };

  return (
    <div className="App">
      <h1> Reducer Practice</h1>
      {/* <Counter_Context.Provider value={value}>
        <div>
          <ParentsComponents />
        </div>
      </Counter_Context.Provider> */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
    </div>
  );
}

export default App;
