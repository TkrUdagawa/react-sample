import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/Navbar';
import {useStyles} from "./styles";
import Main from "./components/Main";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Router>
        <Navbar />
          <div className={classes.appBarSpacer} />
        <Main />
      </Router>
    </div>
  );
}

export default App;
