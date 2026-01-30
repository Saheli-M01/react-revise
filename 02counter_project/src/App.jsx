import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter <= 19) {
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
    }
  };
  const subtractValue = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Bas aise hi</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <button onClick={subtractValue}>Remove Value: {counter}</button>
    </>
  );
}

export default App;
