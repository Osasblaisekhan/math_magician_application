import React, { useState } from 'react';

import { create, all } from 'mathjs';

import './calculator.css';

const Calculator = ({ initialValue }) => {
  const [displayValue, setDisplayValue] = useState(initialValue);

  const math = create(all);

  const handleDisplayValue = (value) => {
    if (value === '0' && displayValue === '0') return;
    setDisplayValue(() => displayValue + value);
  };
  const clearall = () => {
    setDisplayValue(0);
  };
  const toggleStatus = () => {
    setDisplayValue(displayValue * -1);
  };

  const clearOne = () => {
    try {
      setDisplayValue(() => displayValue.slice(0, -1) || '0');
    } catch {
      setDisplayValue('error');
    }
  };
  const evaluateValue = () => {
    try {
      const result = math.evaluate(displayValue);
      setDisplayValue(result);
    } catch {
      setDisplayValue('error');
    }
  };

  const calculateResult = (e) => {
    if (e.key === 'Enter') {
      evaluateValue();
    }
  };
  return (
    <div className='calculator'>
        <form>
            <div className='screen'>
                <input onKeyDown={calculateResult('e')} onChange={() => {}} id='screen' type="text" data-testid='test' value={displayValue} />
            </div>
            <div>
                <button type='button' onClick={() => clearall()}>AC</button>
                <button type='button' onClick={() => clearOne()}>DE</button>
                <button type='button' onClick={() => toggleStatus()}>-/+</button>
                <button type='button' className='red' onClick={() => handleDisplayValue('/')}>/</button>
            </div>
            <div>
                <button type='button' onClick={() => handleDisplayValue('7')}>7</button>
                <button type='button' onClick={() => handleDisplayValue('8')}>8</button>
                <button type='button' onClick={() => handleDisplayValue('9')}>9</button>
                <button type='button' className='red' onClick={() => handleDisplayValue('*')}>*</button>
            </div>
            <div>
                <button type='button' onClick={() => handleDisplayValue('4')}>4</button>
                <button type='button' onClick={() => handleDisplayValue('5')}>5</button>
                <button type='button' onClick={() => handleDisplayValue('6')}>6</button>
                <button type='button' className='red' onClick={() => handleDisplayValue('-')}>-</button>
            </div>
            <div>
                <button type='button' onClick={() => handleDisplayValue('1')}>1</button>
                <button type='button' onClick={() => handleDisplayValue('2')}>2</button>
                <button type='button' onClick={() => handleDisplayValue('3')}>3</button>
                <button type='button' className='red' onClick={() => handleDisplayValue('+')}>+</button>
            </div>
            <div>
                <button type='button' onClick={() => handleDisplayValue('%')}>%</button>
                <button type='button' onClick={() => handleDisplayValue('0')}>0</button>
                <button type='button' onClick={() => handleDisplayValue('.')}>.</button>
                <button type='button' className='red' onClick={() => evaluateValue()}>=</button>
            </div>
        </form>
    </div>
  );
};

export default Calculator;