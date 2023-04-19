import React, { useState } from "react";

const ColorChoice = ({ color, onSelect, selected, setSelected }) => {
  const selectColor = ({ color }) => {
    onSelect(color);
    setSelected(color);
  };

  console.log(color)
  const isSelected = selected == color;
  console.log("is selected");
  console.log(isSelected)
  const style = {
      backgroundColor: color,
      width: isSelected? 35 : 30,
      height: isSelected? 35 : 30,
      margin: 5,
      cursor: "pointer",
      border: isSelected ? "2px solid black" : "0px solid black"
  };
  console.log("style")
  console.log(style)
  return (
    <div style={style} onClick={() => { onSelect(color);
                                        setSelected(color); }}/>
  );
};

function ColorPicker({ colors, onSelect }) {
  // const selectColor = ({ color }) => {
  //   // change border
  //   onSelect(color);
  // };
  
  // const colorItems = colors.map((color) => (
  //   <div
  //     key={color}
  //     style={{
  //       backgroundColor: color,
  //       width: 40,
  //       height: 40,
  //       margin: 5,
  //       cursor: "pointer",
  //       border: "0px solid black",
  //     }}
  //     onClick={() => onSelect(color)}
  //   />
  // ));
  const [selected, setSelected] = useState();

  return (
    <div style={{ display: "flex", margin: "0px" }}>
      { colors.map((color) => <ColorChoice color={ color } onSelect={ onSelect } selected={ selected } setSelected={ setSelected }/>) }
    </div>
  )
}

export default ColorPicker;