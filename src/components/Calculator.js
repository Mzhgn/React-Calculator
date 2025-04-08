import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(" ");
  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput(" ");
  };
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operations = ["+", "-", "*", "/"];
  return (
    <div className="calculator">
      {/* {Display} */}

      <div className="display">
        {/* {Placeholder for input/output} */}
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
        {numbers.map((num) => (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}

        {operations.map((op) => (
          <button key={op} onClick={() => handleClick(op)}>
            {op}
          </button>
        ))}

        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
