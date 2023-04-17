import React from "react";

function ColorPicker({ colors, onSelect }) {
  const colorItems = colors.map((color) => (
    <div
      key={color}
      style={{
        backgroundColor: color,
        width: 40,
        height: 40,
        margin: 5,
        cursor: "pointer",
        border: "1px solid black",
      }}
      onClick={() => onSelect(color)}
    />
  ));

  return <div style={{ display: "flex", margin: "20px" }}>{colorItems}</div>;
}

export default ColorPicker;