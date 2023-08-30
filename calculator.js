import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Hatalı İşlem');
      }
      setInput('');
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <>
        <h1>Calculator with React.JS </h1>
    
    <div className="calculator">
      <div className="empty-side">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>

      <div className="buttons">
        <div className="row">
          <button class="button" onClick={() => handleButtonPress('1')}>1</button>
          <button class="button" onClick={() => handleButtonPress('2')}>2</button>
          <button class="button" onClick={() => handleButtonPress('3')}>3</button>
          <button class="button" onClick={() => handleButtonPress('=')}>=</button>
          
        </div>
        <div className="row">
          <button class="button" onClick={() => handleButtonPress('4')}>4</button>
          <button class="button" onClick={() => handleButtonPress('5')}>5</button>
          <button class="button" onClick={() => handleButtonPress('6')}>6</button>
          <button class="button" onClick={() => handleButtonPress('.')}>.</button>
        </div>
        <div className="row">
          <button class="button" onClick={() => handleButtonPress('7')}>7</button>
          <button class="button" onClick={() => handleButtonPress('8')}>8</button>
          <button class="button" onClick={() => handleButtonPress('9')}>9</button>
          <button class="button" onClick={() => handleButtonPress('0')}>0</button>
        </div>
        <div className="row">
          <button class="button" onClick={() => handleButtonPress('/')}>/</button>
          <button class="button" onClick={() => handleButtonPress('*')}>x</button>
          <button class="button" onClick={() => handleButtonPress('-')}>-</button>
          <button class="button" onClick={() => handleButtonPress('=')}>=</button>
          <button class="button" onClick={() => handleButtonPress('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonPress('C')}>C</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Calculator;
