import React from 'react';
import { ClassExample } from './ClassExample';
import { FunctionExample } from './FunctionExample';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'none' }}
        >
          Learn React
        </a>
        <div className="App-row">
          <div className="App-column App-column--full">
            <hr />
            <div className="large">
              Check your log for results.
            </div>
          </div>
        </div>
        <div className="App-row">
          <ClassExample />
          <FunctionExample />
        </div>
      </header>
    </div>
  );
}

export default App;
