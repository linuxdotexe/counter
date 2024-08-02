import { useState, useEffect } from "react";
import {
  SegmentA,
  SegmentB,
  SegmentC,
  SegmentD,
  SegmentE,
  SegmentF,
  SegmentG,
} from "./Segments";

export default function SegmentDisplay({ number, skew }) {
  const arrangement = {
    0: { a: true, b: true, c: true, d: true, e: true, f: true, g: false },
    1: { a: false, b: true, c: true, d: false, e: false, f: false, g: false },
    2: { a: true, b: true, c: false, d: true, e: true, f: false, g: true },
    3: { a: true, b: true, c: true, d: true, e: false, f: false, g: true },
    4: { a: false, b: true, c: true, d: false, e: false, f: true, g: true },
    5: { a: true, b: false, c: true, d: true, e: false, f: true, g: true },
    6: { a: true, b: false, c: true, d: true, e: true, f: true, g: true },
    7: { a: true, b: true, c: true, d: false, e: false, f: false, g: false },
    8: { a: true, b: true, c: true, d: true, e: true, f: true, g: true },
    9: { a: true, b: true, c: true, d: true, e: false, f: true, g: true },
  };
  const [truth, setTruth] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
  });

  useEffect(() => {
    setTruth(
      arrangement[number] || {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
        f: false,
        g: false,
      }
    );
  }, [number]);

  return (
    <svg
      width="135"
      height="250"
      viewBox="0 0 135 250"
      className={`fill-accent-600 stroke-accent-950/60 transition-transform animate-flicker scale-50 m-[-48px] lg:m-auto lg:scale-100 ${
        skew ? "-skew-x-6" : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <SegmentG
        fillOpacity={truth.g ? "1" : "0.1"}
        triggerChange={number}
      />
      <SegmentF
        fillOpacity={truth.f ? "1" : "0.1"}
        triggerChange={number}
      />
      <SegmentB
        fillOpacity={truth.b ? "1" : "0.1"}
        triggerChange={number}
      />
      <SegmentE
        fillOpacity={truth.e ? "1" : "0.1"}
        triggerChange={number}
      />
      <SegmentD
        fillOpacity={truth.d ? "1" : "0.1"}
        triggerChange={number}
      />
      <SegmentC
        fillOpacity={truth.c ? "1" : "0.1"}
        triggerChange={number}
      />
      <SegmentA
        fillOpacity={truth.a ? "1" : "0.1"}
        triggerChange={number}
      />
    </svg>
  );
}
