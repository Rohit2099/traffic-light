import { useState } from "react";

export default function TrafficLight() {
  const [colorIdx, setColorIdx] = useState(0);
  const colorTimeMap = [4000, 500, 3000];

  setTimeout(() => {
    setColorIdx((c) => {
      if (c == 2) return 0;
      else return c + 1;
    });
  }, colorTimeMap[colorIdx]);

  return (
    <div className="mainframe">
      <div className="container">
        <div className={"lights " + (colorIdx === 0 ? "red" : "")}></div>
        <div className={"lights " + (colorIdx === 1 ? "yellow" : "")}></div>
        <div className={"lights " + (colorIdx === 2 ? "green" : "")}></div>
      </div>
    </div>
  );
}
