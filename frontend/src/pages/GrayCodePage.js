import React, { useState } from 'react';
import axios from 'axios';
import './GrayCodePage.css';

function GrayCodePage() {
  const [bits, setBits] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/gray_code', {
      bits: parseInt(bits)
    });
    setResult(response.data.result);
  };

  return (
    <div className="container">
      <h1>Gray Code Generator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Number of bits</label>
          <input type="text" value={bits} onChange={(e) => setBits(e.target.value)} />
        </div>
        <button type="submit">Generate</button>
      </form>
      {result && (
        <div>
          <h2>Gray Code:</h2>
          <ul>
            {result.map((code, index) => (
              <li key={index}>{code}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GrayCodePage;
