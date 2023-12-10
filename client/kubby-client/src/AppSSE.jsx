import React, { useState, useEffect } from "react";
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
function DataBox({ data }) {
  const color = colorPalette[Math.floor(Math.abs(data) * 10)];
  return (
    <div
      style={{
        height: "40px",
        width: "40px",
        background: `${color}`,
      }}
    >
      {data}
    </div>
  );
}

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const eventSource = new EventSource("http://localhost:3000/events");

    eventSource.onmessage = function (event) {
      // Parse the JSON data and update state
      const newData = JSON.parse(event.data);
      setData(newData);
    };

    eventSource.onerror = function (err) {
      console.error("EventSource failed:", err);
    };

    // Clean up the event source when the component unmounts
    return () => {
      eventSource.close();
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(30,1fr)" }}>
      {data.map((el, i) => {
        return <DataBox key={i} data={el} />;
      })}
    </div>
  );
}

export default App;
