import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(" ");
  const handleClick = (value) => {
    if (value === "." && input.includes(".")) return;
    setInput(input + value);
  };
  const handleClear = () => {
    setInput("");
  };
  const handleCalculate = () => {
    try {
      setInput(eval(input.replace("÷", "/")).toString());
    } catch (error) {
      setInput("Error");
    }
  };
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };
  const handlePercentage = () => {
    setInput((parseFloat(input) / 100).toString());
  };
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operations = ["+", "-", "*", "÷"];
  return (
    <div className="calculator">
      {/* {Display} */}

      <div className="display">
        {/* {Placeholder for input/output} */}
        <input type="text" value={input} readOnly />
      </div>

      <div className="buttons">
        <div className="operators">
          {operations.map((op) => (
            <button key={op} onClick={() => handleClick(op)}>
              {op}
            </button>
          ))}
        </div>
        {numbers.map((num) => (
          <button key={num} onClick={() => handleClick(num)}>
            {num}
          </button>
        ))}

        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handlePercentage}>%</button>
      </div>
    </div>
  );
};

export default Calculator;
