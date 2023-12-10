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

function DataDial({ data }) {
  const radius = 25; // Radius of the circle
  const diameter = radius * 2;
  const index = Math.min(
    Math.floor(Math.abs(data) * 10),
    colorPalette.length - 1
  );
  const angle = ((data + 1) / 2) * 2 * Math.PI;
  const xPos = radius + Math.cos(angle) * radius * 0.75;
  const yPos = radius + Math.sin(angle) * radius * 0.75;
  const color = colorPalette[index];

  return (
    <svg width={diameter} height={diameter}>
      <circle cx={radius} cy={radius} r={radius} fill="black" />
      <circle cx={xPos} cy={yPos} r={radius / 5} fill={color} />
      <line
        x1={radius}
        y1={radius}
        x2={xPos}
        y2={yPos}
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}

export default DataDial;
