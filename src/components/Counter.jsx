import { useState } from "react";

import SegmentDisplay from "./SegmentDisplay";
import arrow from "../assets/arrow.svg";

export default function Counter({ skew }) {
  const [count, setCount] = useState(0);

  function handleClick(inc) {
    inc
      ? setCount((prevCount) =>
          prevCount < 99 ? (prevCount += 1) : (prevCount = 0)
        )
      : setCount((prevCount) => (prevCount -= 1));
  }

  return (
    <div className="flex gap-10 text-accent-600 p-10 rounded-3xl">
      <button
        onClick={() => handleClick(false)}
        className="text-9xl font-bold animate-flicker-hard"
        disabled={count < 1}
      >
        <img
          src={arrow}
          width={120}
          className="fill-accent-600 rotate-180"
        />
      </button>
      <SegmentDisplay
        number={count < 10 ? 0 : (count + "").at(0)}
        skew={skew}
      />
      <SegmentDisplay
        number={count < 10 ? (count + "").at(0) : (count + "").at(1)}
        skew={skew}
      />
      <button
        onClick={() => handleClick(true)}
        className="text-9xl font-bold animate-flicker-hard"
      >
        <img
          src={arrow}
          width={120}
        />
      </button>
    </div>
  );
}
