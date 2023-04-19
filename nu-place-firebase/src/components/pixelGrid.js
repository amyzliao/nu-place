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


function PixelGrid() {
    const [pixels, setPixels] = useState(pixeldata);
    const [selectedColor, setSelectedColor] = useState();
    // TODO: if no color selected, nothing happens
    // TODO: deselect color
    const [lockout, setLockout] = useState(false);

    const currentUser = getAuth().currentUser;
  
    function handlePixelClick(row, col) {
      // check if not locked out and user is logged in
      if (!lockout && currentUser && selectedColor) {
        // change pixel color
        const updatedPixels = JSON.parse(JSON.stringify(pixels));
        updatedPixels[row][col] = selectedColor;
        setPixels(updatedPixels);
        // lock it out
        setButtonPopup(true);
      } else if (!currentUser) {
        // if we're not logged in and try to paint a pixel, there's a popup
        setSignInPopup(true);
      }
    }
  
    const colors = [
      "#FF0000",
      "#00FF00",
      "#0000FF",
      "#FFFF00",
      "#FF00FF"
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
      <>
        {/* <Banner title={ title } description={ description } instructions={instructions}/> */}
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block" }}>
            {pixels.map((row, rowIndex) => (
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
            <h1>log in to paint pixels</h1>
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