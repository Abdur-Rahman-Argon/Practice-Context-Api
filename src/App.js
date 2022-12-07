import "./App.css";
import { createContext, useReducer, useState } from "react";
import InformationFrom from "./components/Pages/InformationFrom";
// import ParentsComponents from "./components/ParentsComponents/ParentsComponents";

export const Counter_Context = createContext();

function App() {
  /* use reducer part */
  // const initialState = 0;
  // const reducer = (state, action) => {
  //   if (action.type === "INCREMENT") {
  //     return state + action.payload.count;
  //   } else if (action.type === "DECREMENT") {
  //     return state - action.payload.count;
  //   }
  // };
  // const [state, dispatch] = useReducer(reducer, initialState);

  /* Context Api part */
  // const [number, setNumber] = useState(0);
  // const incrise = () => {
  //   setNumber(number + 1);
  // };
  // const decrise = () => {
  //   setNumber(number - 1);
  // };

  // const value = { incrise, decrise, number, setNumber };

  return (
    <div className=" w-[500px] text-left mt-6 mx-auto">
      <h1 className=" text-center font-bold text-4xl my-2">
        {" "}
        Reducer Practice
      </h1>

      <InformationFrom></InformationFrom>

      {/* Context Api part */}
      {/* <Counter_Context.Provider value={value}>
        <div>
          <ParentsComponents />
        </div>
      </Counter_Context.Provider> */}

      {/* use reducer part */}
      {/* <button
        onClick={() => dispatch({ type: "INCREMENT", payload: { count: 5 } })}
      >
        increment
      </button>
      <p>{state}</p>
      <button
        onClick={() => dispatch({ type: "DECREMENT", payload: { count: 7 } })}
      >
        decrement
      </button> */}
    </div>
  );
}

export default App;
