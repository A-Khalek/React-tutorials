import React, { useState } from "react";

function Home() {
  const [number, setNumber] = useState(0);

  const incress = () => {
    if (number < 5) {
      setNumber(number + 1);
    }
  };

  const decress = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <>
      <h1> Number is : {number}</h1>

      <button class="btn btn-primay" onClick={incress}>
        Incress
      </button>

      <button onClick={decress}> Decress </button>

      <button onClick={reset}>Reset</button>
    </>
  );
}

export default Home;
