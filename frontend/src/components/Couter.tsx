import React, { useState } from "react";

export default function Couter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter((curr) => curr + 1), setCounter((curr) => curr + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
