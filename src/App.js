import React from 'react';
import logo from './assets/logo.svg';
import webpack from './assets/webpack.png';

export const App = () => {
  console.log('This is app');

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="App-headers">
            <img src={logo} className="App-logo" alt="logo" />

            <img src={webpack} className="App-logo" alt="logo" />
          </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://react.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
};
