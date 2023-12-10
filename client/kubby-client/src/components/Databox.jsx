import React from "react";
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
  const index = Math.min(
    Math.floor(Math.abs(data) * 10),
    colorPalette.length - 1
  );
  const color = colorPalette[index];

  return (
    <div
      style={{
        height: "40px",
        width: "40px",
        backgroundColor: color,
      }}
    ></div>
  );
}

export default DataBox;
