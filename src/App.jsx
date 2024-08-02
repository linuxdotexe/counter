import { useState } from "react";
import Counter from "./components/Counter";
import Clock from "./components/Clock";

export default function App() {
  const [clock, setClock] = useState(false);
  const [skew, setSkew] = useState(true);
  return (
    <div className="flex flex-col items-center">
      <h1 className="tracking-tighter text-5xl text-accent-600 text-center font-bold">
        {clock ? "CLOCK" : "COUNTER"}
      </h1>
      <div className="flex gap-2 text-accent-600 text-lg">
        <button
          className={
            skew
              ? "bg-accent-900/40 px-3 py-1 rounded-full"
              : "px-3 py-1 rounded-full"
          }
          onClick={() => setSkew((prev) => (prev = true))}
        >
          CROOKED
        </button>
        <button
          className={
            !skew
              ? "bg-accent-900/40 rounded-full px-3 py-1"
              : "px-3 py-1 rounded-full"
          }
          onClick={() => setSkew((prev) => (prev = false))}
        >
          NOT CROOKED
        </button>
      </div>
      {clock ? <Clock skew={skew} /> : <Counter skew={skew} />}
      <button
        className="border-accent-950 border-2 bg-accent-600 text-2xl font-bold px-4 py-2 rounded-full"
        onClick={() => setClock((prev) => !prev)}
      >
        {clock ? "CLICK FOR COUNTER" : "CLICK FOR CLOCK"}
      </button>
    </div>
  );
}
