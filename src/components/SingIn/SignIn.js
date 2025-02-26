import React from 'react';
import { auth } from '../../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="sign-in">
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

export default SignIn;