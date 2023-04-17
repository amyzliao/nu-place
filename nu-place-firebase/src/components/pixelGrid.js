import React, { useState } from "react";
// import { useData, setData } from './utilities/firebase.js';
import '../App.css';
import axios from 'axios';
import ColorPicker from "./ColorPicker";
import pixeldata from "./pixeldata.json";
import makeBanner from "./header";
import Popup from './Popup';
import Timer from './Timer';


function PixelGrid() {
    const [pixels, setPixels] = useState(pixeldata);
    const [selectedColor, setSelectedColor] = useState("#FF0000");
    const [lockout, setLockout] = useState(false);
  
    function handlePixelClick(row, col) {
      // check if locked out
      if (!lockout) {
        // if not locked out
        const updatedPixels = JSON.parse(JSON.stringify(pixels));
        updatedPixels[row][col] = selectedColor;
        setPixels(updatedPixels);
        // lock it out
        setButtonPopup(true);
      }
      
    }
  
    const colors = [
      "#FF0000",
      "#00FF00",
      "#0000FF",
      "#FFFF00",
      "#FF00FF"
    ];
  
    const Banner = ({ title, description, instructions }) => {
      return (
        <div class='title-group'>
          <h1 class='title-t'>{ title }</h1>
          <h2 class='title-d'>{ description }</h2>
          <div class='rect-i'>
            <h4 class='title-i'>{ instructions }</h4>
          </div>
        </div>
      );
    };
  
    const title = "NU/Place";
    const description = "NORTHWESTERN'S VIRTUAL ROCK";
    const instructions = "Click on a square to paint it. You can paint one square every 5 minutes.";
  
    const [buttonPopup, setButtonPopup] = useState(false);
  
    return (
      <>
        <Banner title={ title } description={ description } instructions={instructions}/>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block" }}>
            {pixels.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: "flex" }}>
                {row.map((color, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    style={{ width: "50px", height: "50px", backgroundColor: color }}
                    onClick={() => handlePixelClick(rowIndex, colIndex)}
                  />
                ))}
              </div>
            ))}
          </div>
          <div
            style={{ margin: "20px auto", display: "flex", justifyContent: "center" }}
          >
            <ColorPicker colors={colors} onSelect={(color) => setSelectedColor(color)} />
          </div>
        </div>
        
        <Popup trigger = {buttonPopup} setTrigger = {setButtonPopup}>
            <Timer/>
        </Popup>
      </>
    );
  }
  
  export default PixelGrid;
  
  /* 
<main>
        <button onClick = {() => setButtonPopup(true)} className = "color-block">  </button>
      </main>

      */