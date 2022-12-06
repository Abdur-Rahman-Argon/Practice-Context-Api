import React, { useContext } from "react";
import { Counter_Context } from "../../App";
import ChildComponents from "./ChildComponents/ChildComponents";

const ParentsComponents = () => {
  const { incrise, decrise, number, setNumber } = useContext(Counter_Context);
  return (
    <div>
      <p>{number} from parents</p>
      <ChildComponents />
    </div>
  );
};

export default ParentsComponents;
