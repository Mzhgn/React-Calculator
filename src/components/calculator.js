import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const calculator = () => {
  const [value, setValue] = useState(" ");

  const handleButtonClick = (val) => {
    if (val === "=") {
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>{value}</div>
    </div>
  );
};

export default calculator;
