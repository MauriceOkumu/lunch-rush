import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
      <button>Sign in </button>
      </div>
    );
  }
}

export default SignIn;
