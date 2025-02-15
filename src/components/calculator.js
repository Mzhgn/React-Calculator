import React, { useState } from "react";

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
