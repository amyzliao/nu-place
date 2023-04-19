import React, { useState } from "react";

const title = "NU/Place";
const description = "NORTHWESTERN'S VIRTUAL ROCK";
const instructions = "Click on a square to paint it. You can paint one square every 5 minutes.";

export const Banner = ({ title, description, instructions }) => {
    return (
      <div class='title-group'>
        <h1 class='title-t'>{ title }</h1>
        {/* <h2 class='title-d'>{ description }</h2> */}
        {/* <div class='rect-i'>
          <h4 class='title-i'>{ instructions }</h4>
        </div> */}
      </div>
    );
  };

export const MakeBanner = () => {
    return (
        <Banner title={ title } description={ description } instructions={instructions}/>
    );
};