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

function HorizontalDatabar({ data }) {
  const radius = 25; // Radius of the circle
  const diameter = radius * 2;
  const index = Math.min(
    Math.floor(Math.abs(data) * 10),
    colorPalette.length - 1
  );
  const width = ((data + 1) / 2) * 50;

  return (
    <svg width={diameter} height={diameter}>
      <rect
        x="0" // X-coordinate of the rectangle's top-left corner
        y="0" // Y-coordinate of the rectangle's top-left corner
        width={width} // Width of the rectangle
        height="50" // Height of the rectangle
        fill={colorPalette[index]} // Fill color of the rectangle
        stroke="black" // Border color of the rectangle
        strokeWidth="2" // Border width
      />
    </svg>
  );
}

export default HorizontalDatabar;
