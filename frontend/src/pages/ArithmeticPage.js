import React, { useState } from 'react';
import axios from 'axios';
import './ArithmeticPage.css';

function ArithmeticPage() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [operation, setOperation] = useState('add');
  const [baseIn, setBaseIn] = useState(10);
  const [baseOut, setBaseOut] = useState(10);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/arithmetic', {
      number1,
      number2,
      operation,
      base_in: baseIn,
      base_out: baseOut
    });
    setResult(response.data.result);
  };

  return (
    <div className="container">
      <h1>Arithmetic Operations</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Number 1</label>
          <input type="text" value={number1} onChange={(e) => setNumber1(e.target.value)} />
        </div>
        <div>
          <label>Number 2</label>
          <input type="text" value={number2} onChange={(e) => setNumber2(e.target.value)} />
        </div>
        <div>
          <label>Operation</label>
          <select value={operation} onChange={(e) => setOperation(e.target.value)}>
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
          </select>
        </div>
        <div>
          <label>Base In</label>
          <select value={baseIn} onChange={(e) => setBaseIn(e.target.value)}>
            <option value={10}>Decimal</option>
            <option value={2}>Binary</option>
            <option value={16}>Hexadecimal</option>
          </select>
        </div>
        <div>
          <label>Base Out</label>
          <select value={baseOut} onChange={(e) => setBaseOut(e.target.value)}>
            <option value={10}>Decimal</option>
            <option value={2}>Binary</option>
            <option value={16}>Hexadecimal</option>
          </select>
        </div>
        <button type="submit">Calculate</button>
      </form>
      {result && <div>Result: {result}</div>}
    </div>
  );
}

export default ArithmeticPage;
