import React, { useState } from "react";
// import { useData, setData } from './utilities/firebase.js';
import '../App.css';
import axios from 'axios';
import ColorPicker from "./ColorPicker";
import pixeldata from "./pixeldata.json";
import makeBanner from "./header";
import Popup from './Popup';
import Timer from './Timer';
import { getAuth } from 'firebase/auth';
import { MakeBanner, Banner } from "./banner";
import { setData } from "../utilities/firebase.js";

function PixelGrid({ pixelData }) {
    console.log("pixel data pixel grid");
    console.log(pixelData);

    // const [pixels, setPixels] = useState(pixeldata);
    const [selectedColor, setSelectedColor] = useState();
    // TODO: if no color selected, nothing happens
    // TODO: deselect color
    const [lockout, setLockout] = useState(false);

    const currentUser = getAuth().currentUser;
  
    async function handlePixelClick(row, col) {
      // check if not locked out and user is logged in
      if (!lockout && currentUser && selectedColor) {
        // change pixel color
        // const updatedPixels = JSON.parse(JSON.stringify(pixels));
        const updatedPixels = JSON.parse(JSON.stringify(pixelData));
        updatedPixels[row][col] = selectedColor;
        // setPixels(updatedPixels);
        try {
          await setData(`/`, updatedPixels);
        } catch (error) {
          alert(error);
        }
        
        // lock it out
        setButtonPopup(true);
      } else if (!currentUser) {
        // if we're not logged in and try to paint a pixel, there's a popup
        setSignInPopup(true);
      }
    }
  
    const colors = [
      "#ff7a7a",
      "#fc0303",
      "#fc7303",
      "#fcc203",
      "#ffea00",
      "#ebfc03",
      "#9dfc03",
      "#c2ffa6",
      "#1cfc03",
      "#03fcc2",
      "#b8fff3",
      "#03cefc",
      "#b8e0ff",
      "#0384fc",
      "#b8bfff",
      "#3503fc",
      "#d0b8ff",
      "#8003fc",
      "#b103fc",
      "#ffb8eb",
      "#fc03ba",
      "#ffb8b8",
      "#fc0362",
      "#ffffff",
      "#d1d1d1",
      "#919191",
      "#4f4f4f",
      "#1f1f1f",
      "#000000"
    ];
    const title = "NU/Place";
    const description = "NORTHWESTERN'S VIRTUAL ROCK";
    const instructions = "Click on a square to paint it. You can paint one square every 5 minutes.";
    
  
    const [buttonPopup, setButtonPopup] = useState(false);
    const [signInPopup, setSignInPopup] = useState(false);

    // const selectColor = ({ color }) => {
    //   // add border
    //   setSelectedColor(color);
    // }
    
    return (
      <div className="canvas">
        {/* <Banner title={ title } description={ description } instructions={instructions}/> */}
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block" }}>
            {pixelData.map((row, rowIndex) => (
              <div key={rowIndex} style={{ display: "flex" }}>
                {row.map((color, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    style={{ width: "10px", height: "10px", backgroundColor: color }}
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
        <Popup trigger = {signInPopup} setTrigger = {setSignInPopup}>
            <h2>LOG IN TO PAINT PIXELS</h2>
        </Popup>
      </div>
    );
  }
  
  export default PixelGrid;
  
  /* 
<main>
        <button onClick = {() => setButtonPopup(true)} className = "color-block">  </button>
      </main>

      */