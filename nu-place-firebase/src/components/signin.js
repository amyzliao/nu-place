import React from "react";
import { signOut, signInWithGoogle } from '../utilities/firebase.js';


export const SignInButton = ( users ) => {
    return (
        <button
            onClick={() => signInWithGoogle()}>
            Log in with Google
        </button>
    );
};

export const SignOutButton = () => {
    return (
        <button
            onClick={() => signOut()}>
            Sign Out
        </button>
    );
};