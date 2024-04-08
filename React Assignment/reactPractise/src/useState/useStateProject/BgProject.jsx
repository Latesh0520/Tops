import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
const colors = ["red", "pink", "orange", "yellow", "blue", "black", "gray"];

export default function BgProject() {
  let [colorIndex, setColorIndex] = useState(0);
  const ChangeIndex = () => {
    if (colors.length - 1 <= colorIndex) {
      setColorIndex(0);
    }else{
      setColorIndex(colorIndex + 1);
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "grid",
        placeContent: "center",
        backgroundColor: colors[colorIndex],
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h1>{colorIndex}</h1>
        <Button onClick={ChangeIndex}>Color Change</Button>
      </div>
    </div>
  );
}
