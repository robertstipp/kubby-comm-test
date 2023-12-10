import React, { useState, useEffect } from "react";

import DataBox from "./components/Databox.jsx";
const colorPalette = [
  "#00FF00", // Green
  "#4CFF00", // Green-Yellowish
  "#99FF00", // Lighter Green-Yellow
  "#CCFF00", // Yellow-Green
  "#FFFF00", // Yellow
  "#FFCC00", // Yellow-Orange
  "#FF9900", // Light Orange
  "#FF6600", // Orange
  "#FF3300", // Red-Orange
  "#FF0000", // Red
];
// function DataBox({ data }) {
//   const color = colorPalette[Math.floor(Math.abs(data) * 10)];
//   return (
//     <div
//       style={{
//         height: "30px",
//         width: "35px",
//         background: `${color}`,
//       }}
//     ></div>
//   );
// }

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onopen = function (event) {
      console.log("Connected to the server");
      socket.send("Hello! Message from client...");
    };

    socket.onmessage = function (event) {
      const newData = JSON.parse(event.data);
      setData(newData);
    };

    socket.onerror = function (error) {
      console.error("WebSocket error:", error);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(50,1fr)" }}>
      {data.map((el, i) => {
        return <DataBox key={i} data={el} />;
      })}
    </div>
  );
}

export default App;
