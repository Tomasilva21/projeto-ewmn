import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutProjectPage from './pages/AboutProjectPage';
import ArithmeticPage from './pages/ArithmeticPage';
import ConverterPage from './pages/ConverterPage';
import GrayCodePage from './pages/GrayCodePage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutProjectPage} />
        <Route path="/arithmetic" component={ArithmeticPage} />
        <Route path="/converter" component={ConverterPage} />
        <Route path="/gray-code" component={GrayCodePage} />
      </Switch>
    </Router>
  );
}

export default App;
