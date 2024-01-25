'use client'
import Image from "next/image";
import React, { useState } from 'react';

export default function Home() {
  // Initialize the counter state
  const [counter, setCounter] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
      setCounter(counter + 1);
  };

  return (
    <div>
      <div>
        Hello World
      </div>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={incrementCounter}>Increment Counter</button>
      </div>
    </div>
  );
}
