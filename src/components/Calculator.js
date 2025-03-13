import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(" ");
};
const handleClick = (value) => {
  setInput(input + value);
};
