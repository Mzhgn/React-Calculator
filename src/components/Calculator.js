import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(" ");

  return (
    <div className="calculator">
      {/* {Display} */}

      <div className="display">
        {/* {Placeholder for input/output} */}
        <input type="text" readOnly />
      </div>
      <div className="buttons">
        <button>1</button>
      </div>
    </div>
  );
};
const handleClick = (value) => {
  setInput(input + value);
};
const handleClear = () => {
  setInput(" ");
};
