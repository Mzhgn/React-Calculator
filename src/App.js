import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);

  const handleClick = (value) => {
    setDisplay(value);
  };
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
