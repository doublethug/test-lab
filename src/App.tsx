import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DashBoard from './components/DashBoard/DashBoard';
import MathLab from './components/MathLab/MathLab';
import ModelsPreview from './components/ModelsPreview/ModelsPreview';

import './App.css';

import logo from './logo.svg';

function App() {
  
  return (
    <Router>
      <div className="App">
        <ul className="main-side-menu">
          <li>
            <Link to="/">Dash Board</Link>
          </li>
          <li>
            <Link to="/math-lab">Math Lab</Link>
          </li>
          <li>
            <Link to="/model-preview">Models Preview</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <DashBoard />
          </Route>
          <Route path="/math-lab">
            <MathLab />
          </Route>
          <Route path="/model-preview">
            <ModelsPreview />
          </Route>
        </Switch>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    </Router>
  );
}

export default App;
