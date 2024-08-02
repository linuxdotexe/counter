import { useState, useEffect } from "react";

import SegmentDisplay from "./SegmentDisplay";
import Separator from "./Separator";

export default function Clock({ skew }) {
  const event = new Date();
  const initTime = event.toTimeString().toString();
  const [time, setTime] = useState(initTime);
  useEffect(() => {
    const interval = setInterval(() => {
      const event = new Date();
      const currentTime = event.toTimeString().split(" ")[0]; // Get only the time portion
      setTime(currentTime);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex gap-10 p-10 items-center justify-center">
      <SegmentDisplay
        number={time[0]}
        skew={skew}
      />
      <SegmentDisplay
        number={time[1]}
        skew={skew}
      />
      <Separator skew={skew} />
      <SegmentDisplay
        number={time[3]}
        skew={skew}
      />
      <SegmentDisplay
        number={time[4]}
        skew={skew}
      />
      <div className="hidden lg:flex gap-10">
        <Separator skew={skew} />
        <SegmentDisplay
          number={time[6]}
          skew={skew}
        />
        <SegmentDisplay
          number={time[7]}
          skew={skew}
        />
      </div>
    </div>
  );
}
