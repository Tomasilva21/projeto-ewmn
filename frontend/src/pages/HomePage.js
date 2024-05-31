import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to the Calculator Web App</h1>
      <p>This app provides various calculators including arithmetic operations, base conversion, and Gray code generation.</p>
      <div className="buttons">
        <Link to="/arithmetic" className="button">Arithmetic Operations</Link>
        <Link to="/converter" className="button">Base Converter</Link>
        <Link to="/gray-code" className="button">Gray Code Generator</Link>
      </div>
    </div>
  );
}

export default HomePage;
