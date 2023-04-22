import React, { useState } from "react";
import { useUserState } from './utilities/firebase.js';
import { getAuth } from 'firebase/auth';
import './App.css';
// import axios from 'axios';
import PixelGrid from './components/pixelGrid';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInButton, SignOutButton } from "./components/signin.js";
import { MakeBanner } from './components/banner.js';
import { useData, setData } from './utilities/firebase.js';

const LoggedIn = ({ user, pixelData }) => {
  return (
    <div>
      {/* <div className = "sign-in-confirmation">
        <h4>You are signed in. Your name is { user.displayName } and your email is { user.email }. </h4>
      </div> */}
      <div className = "sign-out-btn">
        
        <SignOutButton/>
        <img className="pfp" src={ user.photoURL } alt="Profile Picture"/>
        {/* <h5>{ user.photoURL }</h5> */}
      </div>
      <MakeBanner/>
      <PixelGrid pixelData={ pixelData }/>
    </div>
  );
};

const LoggedOut = ( user, pixelData ) => {
  return (
    <div>
      {/* <h4>You are not logged in. Log in to start using NU/Place!</h4> */}
      <div className = "sign-in-btn">
        <SignInButton user={ user }/>
      </div>
      <MakeBanner/>
      <PixelGrid pixelData={ pixelData }/>
    </div>
  )
};

function App() {
  // pixelData stores data we got from firebase
  const [pixelData, loading, error] = useData('/'); 
  // the logged in user
  const [user] = useUserState();

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading NU/Place</h1>
  console.log(pixelData);
  
  console.log("user:");
  console.log(user);

  const auth = getAuth();
  console.log("auth");
  console.log(auth);
  

  return (
    <div className="App">
      { user ? <LoggedIn user={ user } pixelData={ pixelData }/> : <LoggedOut user={ user } pixelData={ pixelData }/> }
      {/* { !user ? <></> : 
      <BrowserRouter>
            <Routes>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/adoptcat" element={<AdoptCat data={data} />}/>
                <Route path="/addcat" element={<AddCat cats={data.cats}/>}/>
                <Route path="/" element={<Home />}/>
            </Routes>
      </BrowserRouter> 
      } */}
    </div>
  );
};

export default App;


