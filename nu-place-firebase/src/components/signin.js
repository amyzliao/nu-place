import React from "react";
import { signOut, signInWithGoogle } from '../utilities/firebase.js';
import './signin.css'
export const SignInButton = ( ) => {
    return (
        <button
            onClick={() => signInWithGoogle()} className = "btn">
            <div className = "btn-text">
                LOG IN WITH GOOGLE
            </div>
        </button>
    );
};

export const SignOutButton = () => {
    return (
        <button
            onClick={() => signOut()} className = "btn">
            <div className = "btn-text">
                SIGN OUT
            </div>
        </button>
    );
};