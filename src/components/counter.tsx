import { useState } from "react";

const inc = (count : number) => count + 1

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count => count + 1)
    setCount(count => count + 1)
    setCount(count => count + 1)
  }


  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">0</p>
      <div className="flex gap-2">
        <button onClick={() => setCount(count => count + 1)}>➖ Decrement</button>
        <button>🔁 Reset</button>
        <button>➕ Increment</button>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="number" value={0} />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
