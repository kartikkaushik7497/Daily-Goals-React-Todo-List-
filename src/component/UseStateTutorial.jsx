import React, { useState } from "react";

const Home = () => {
  const btn = {
    width: "50px",
    height: "25px",
    border: "2px solid black",
    borderRadius: "10px",
    backgroundColor: "white",
    color: "black",
    margin: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    cursor: "pointer",
  };
  const [inputValue, setInputValue] = useState(0); // set input value to variable using let
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const increment = () => {
    //If the input value is not constant then do inputValue++;
    // const newValue = inputValue++;
    // setInputValue(newValue);

    setInputValue(inputValue + 1);
  };
  const decrement = () => {
    setInputValue(inputValue - 1);
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Enter a number..."
        value={inputValue}
        onChange={onChange}
      />
      <button style={btn} onClick={increment}>
        +
      </button>
      <button style={btn} onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default Home;
