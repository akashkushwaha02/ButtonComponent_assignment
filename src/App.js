import React, { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";
// import Decrement from "./components/Table";
// import Table from "./components/Table";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button
        label={"ANything"}
        onClick={() => {}}
        color="danger"
        tooltip="Text message"
        onLongPress={() => {}}
        size="xLg"
        disabled={false}
      />
    </>

    // size: PropTypes.string,
    // color: PropTypes.string,
    // tooltip: PropTypes.string,
    // label: PropTypes.string.isRequired,
    // onClick: PropTypes.func.isRequired,
    // onLongPress: PropTypes.func,
    // disabled: PropTypes.bool,
  );
  // const [count, setCount] = useState(0);
  // const [trial, setTrial] = useState(0);

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // const handleDecrement = (value) => {
  //   setCount(value);
  // };

  // return (
  //   <div className="App">
  //     <Table />
  //   </div>
  // );
}

export default App;
