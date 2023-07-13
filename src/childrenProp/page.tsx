import React from "react";
import Parent from "../children/Parent";
import Child from "../children/Child";
import SecondChild from "../children/SecondChild";

const ChildrenPropExample = () => {
  return (
    <div>
      <Parent>
        <SecondChild />
      </Parent>
    </div>
  );
};

export default ChildrenPropExample;
