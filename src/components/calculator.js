import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const calculator = () => {
  const [value, setValue] = useState(" ");

  return (
    <div>
      <h1>Calculator</h1>
      <div>{value}</div>
    </div>
  );
};

export default calculator;
