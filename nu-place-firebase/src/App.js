import React, { useState } from "react";
import { useUserState } from './utilities/firebase.js';
import { getAuth } from 'firebase/auth';
import './App.css';
// import axios from 'axios';
import PixelGrid from './components/pixelGrid';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInButton, SignOutButton } from "./components/signin.js";
import { MakeBanner } from './components/banner.js';

const LoggedIn = ({ user }) => {
  return (
    <div>
      <div className = "sign-in-confirmation">
        <h4>You are signed in. Your name is { user.displayName } and your email is { user.email }. </h4>
      </div>
      <div className = "sign-out-btn">
        <SignOutButton/>
      </div>
      <MakeBanner/>
      <PixelGrid/>
    </div>
  );
};

const LoggedOut = ( user ) => {
  return (
    <div>
      <h4>You are not logged in. Log in to start using NU/Place!</h4>
      <div className = "sign-in-btn">
        <SignInButton user={ user }/>
      </div>
      <MakeBanner/>
      <PixelGrid/>
    </div>
  )
};

function App() {
  // the logged in user
  const [user] = useUserState();
  console.log("user:");
  console.log(user);

  const auth = getAuth();
  console.log("auth");
  console.log(auth);
  

  return (
    <div className="App">
      { user ? <LoggedIn user={ user } /> : <LoggedOut user={ user }/> }
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


