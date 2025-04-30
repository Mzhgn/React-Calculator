import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
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
  const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
  const operations = ["÷", "×", "-", "+", "="];
  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>

      <div className="buttons">
        <div className="leftButtons">
          <div className="special-buttons">
            <button onClick={handleClear}>C</button>
            <button onClick={handlePercentage}>%</button>
            <button onClick={() => handleClick("+/-")}>&larr; </button>
            {/* <button onClick={handleCalculate}>=</button> */}
          </div>
          <div className="numbers">
            {numbers.map((num) => (
              <button key={num} onClick={() => handleClick(num)}>
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="operators">
          {operations.map((op) => (
            <button
              key={op}
              onClick={() => (op === "=" ? handleCalculate() : handleClick(op))}
            >
              {op}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
