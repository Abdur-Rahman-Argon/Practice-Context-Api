import { React, useContext } from "react";
import { Counter_Context } from "../../../App";

const ChildComponents = () => {
  const { incrise, decrise, number, setNumber } = useContext(Counter_Context);
  return (
    <div>
      <button onClick={incrise}> incrise</button>
      <p>{number}</p>
      <button onClick={decrise}> decrise</button>
    </div>
  );
};

export default ChildComponents;
