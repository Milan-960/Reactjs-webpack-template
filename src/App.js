import React from 'react';
import logo from './assets/logo.svg';
import webpacks from './assets/webpack.svg';

export const App = () => {
  console.log('This is app');

  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="App-headers">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={webpacks} className="App-logo" alt="logo" />
          </div>
          <p>
            React + WebPack Template! Edit <code>src/App.js</code> and save to
            reload.
          </p>
          <div className="learn-both">
            <div>
              <a
                className="App-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </div>
            <div>
              <a
                className="App-link"
                href="https://webpack.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn WebPack
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};
