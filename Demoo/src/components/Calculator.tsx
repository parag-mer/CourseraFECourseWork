import { useState } from "react";

export const Calculator = () => {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(result + input);
  };
  const subtract = () => {
    setResult(result - input);
  };
  const multiply = () => {
    setResult(result * input);
  };
  const divide = () => {
    setResult(result / input);
  };
  const resetInput = () => {
    setInput(0);
  };
  const resetResult = () => {
    setResult(0);
  };
  return (
    <div className="container">
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary m-2" onClick={add}>
              Addition
            </button>
            <button className="btn btn-primary m-2" onClick={subtract}>
              Subtraction
            </button>
            <button className="btn btn-primary m-2" onClick={multiply}>
              Multiplication
            </button>
            <button className="btn btn-primary m-2" onClick={divide}>
              Division
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn btn-outline-warning m-2"
              onClick={resetInput}
            >
              Reset Input
            </button>
            <button
              className="btn btn-outline-warning m-2"
              onClick={resetResult}
            >
              Reset Result
            </button>
          </div>
        </div>
      </div>
      <div>
        <h1>Result :: {result}</h1>
      </div>
    </div>
  );
};
