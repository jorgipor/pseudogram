import React, { Component } from 'react';
import firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  hableAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();


    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pseudogram</h2>
        </div>
        <p className="App-intro">
          <button onClick={this.hableAuth}>Login con Google</button>
        </p>
      </div>
    );
  }
}

export default App;