'use client'

import { useState } from "react";

export const CartCounter = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = (option: string) => {
    if (counter === 0 && option === "minus") return;
    option === "plus"
      ? setCounter((prevState) => prevState + 1)
      : setCounter((prevState) => prevState - 1);
  };

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          className="t-black-btn"
          onClick={() => handleCounter("minus")}
          disabled={counter === 0}
        >
          -1
        </button>
        <button className="t-black-btn" onClick={() => handleCounter("plus")}>
          +1
        </button>
      </div>
    </>
  );
};
