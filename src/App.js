import "./App.css";
import { createContext, useState } from "react";
import ParentsComponents from "./components/ParentsComponents/ParentsComponents";

export const Counter_Context = createContext();

function App() {
  const [number, setNumber] = useState(0);

  const incrise = () => {
    setNumber(number + 1);
  };

  const decrise = () => {
    setNumber(number - 1);
  };

  const value = { incrise, decrise, number, setNumber };

  return (
    <div className="App">
      <h1> Reducer Practice</h1>
      <Counter_Context.Provider value={value}>
        <div>
          <ParentsComponents />
        </div>
      </Counter_Context.Provider>
    </div>
  );
}

export default App;
