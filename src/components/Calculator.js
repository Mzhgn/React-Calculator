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
  return (
    <div className="calculator">
      {/* {Display} */}

      <div className="display">
        {/* {Placeholder for input/output} */}
        <input type="text" readOnly />
      </div>
      <div className="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>*</button>
        <button>C</button>
        <button>=</button>
        <button>/</button>
      </div>
    </div>
  );
};

export default Calculator;
