import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { fabric } from "fabric";

const Task1 = () => {
  const [x, setx] = useState(200);
  const [y, sety] = useState(200);

  useEffect(() => {
    const canvas = new fabric.Canvas("f_canvas");
    const rect = new fabric.Rect({
      width: 100,
      height: 100,
      fill: "red",
      angle: 0,
      top: 200,
      left: 200,
    });

    canvas.add(rect);
    setInterval(() => {
      setx(rect.left);
      sety(rect.top);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1> X-axis position : {x}</h1>
      <h2> Y-axis position : {y}</h2>
      <canvas id="f_canvas" width="1500" height="540" />
    </div>
  );
};
//Make a timer have the function looped and have that repeat the answer

export default Task1;
