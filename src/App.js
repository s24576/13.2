import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

const Calculator = () => {
  const { operation } = useParams();
  const query = new URLSearchParams(window.location.search);
  const x = Number(query.get("x"));
  const y = Number(query.get("y"));

  let result;
  switch (operation) {
    case "add":
      result = x + y;
      break;
    case "sub":
      result = x - y;
      break;
    case "mul":
      result = x * y;
      break;
    case "div":
      if (y === 0) {
        result = "Division by zero error";
      } else {
        result = x / y;
      }
      break;
    default:
      result = "Invalid operation";
  }

  return (
    <div>
      <h2>Result: {isNaN(x) || isNaN(y) || isNaN(result) ? "Invalid input" : result}</h2>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/:operation" element={<Calculator />} />
    </Routes>
  </Router>
);

export default App;
