import React, { useState } from 'react';
import axios from 'axios';
import './ConverterPage.css';

function ConverterPage() {
  const [number, setNumber] = useState('');
  const [baseFrom, setBaseFrom] = useState(10);
  const [baseTo, setBaseTo] = useState(10);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/convert', {
      number,
      base_from: baseFrom,
      base_to: baseTo
    });
    setResult(response.data.result);
  };

  return (
    <div className="container">
      <h1>Base Converter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Number</label>
          <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div>
          <label>Base From</label>
          <select value={baseFrom} onChange={(e) => setBaseFrom(e.target.value)}>
            <option value={10}>Decimal</option>
            <option value={2}>Binary</option>
            <option value={16}>Hexadecimal</option>
          </select>
        </div>
        <div>
          <label>Base To</label>
          <select value={baseTo} onChange={(e) => setBaseTo(e.target.value)}>
            <option value={10}>Decimal</option>
            <option value={2}>Binary</option>
            <option value={16}>Hexadecimal</option>
          </select>
        </div>
        <button type="submit">Convert</button>
      </form>
      {result && <div>Result: {result}</div>}
    </div>
  );
}

export default ConverterPage;
