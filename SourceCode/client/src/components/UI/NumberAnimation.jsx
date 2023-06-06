import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function NumberAnimation({ desNumber }) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < desNumber) {
        setNumber((prevNumber) => prevNumber + 1);
      }
    }, Math.trunc(2000 / desNumber));

    return () => {
      clearInterval(interval);
    };
  }, [number]);

  return (
    <div>
      <p>{number}</p>
    </div>
  );
}

export default NumberAnimation;
