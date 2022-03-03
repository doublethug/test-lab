import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import SideMenu from './components/SideMenu/SideMenu';

import DashBoard from './components/DashBoard/DashBoard';
import MathLab from './components/MathLab/MathLab';
import ModelsPreview from './components/ModelsPreview/ModelsPreview';
import HeightMapGenerator from './components/HeightMapGenerator/HeightMapGenerator';
import ThreePlayer from './components/ThreePlayer/ThreePlayer';

import styles from './App.module.scss';
// import './App.css';

import logo from './logo.png';

function App() {
  return (
    <Router>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
      </header>
      <div className={styles.app}>
        <SideMenu />
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
          <Route path="/height-maps">
            <HeightMapGenerator />
          </Route>
          <Route path="/three-player">
            <ThreePlayer />
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
