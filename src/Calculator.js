import { FC, useState } from 'react';
import './style.css';

export const App = () => {
  const [display, setDisplay] = useState('');
  const [hasCalculated, setHasCalculated] = useState(false);
  const [previousResults, setPreviousResults] = useState<number[]>([]);
  const [sabiranjeCount, setSabiranjeCount] = useState(0); // Dodata promenljiva za praćenje broja sabiranja
  const operations = ['+', '-', '*', '/'];

  const addToDisplay = (value) => {
    setDisplay((prevDisplay) => {
      if (!operations.includes(value) && hasCalculated) {
        setHasCalculated(false);
        return value;
      }
      if (prevDisplay === 'Error') {
        return value;
      } else if (prevDisplay === '0' && !isNaN(value)) {
        return value;
      } else if (/[\+\-\*\/]/.test(value)) {
        return String(prevDisplay) + value;
      } else if (/[0-9]/.test(value)) {
        return String(prevDisplay) + value;
      } else {
        return String(prevDisplay) + value;
      }
    });
  };

  const calculateResult = () => {
    setDisplay((prevDisplay) => {
      try {
        const result = eval(prevDisplay);
        setPreviousResults((prevResults) => {
          return prevResults.includes(result) ? prevResults : [...prevResults, result];
        });
        setSabiranjeCount((prevCount) => prevCount + 1); // Povećaj broj sabiranja
        return String(result);
      } catch (error) {
        return 'Error';
      }
    });
    setHasCalculated(true);
  };

  const resetDisplay = () => {
    setDisplay('');
    setHasCalculated(false);
    setSabiranjeCount(0); // Resetuj broj sabiranja
  };

  const handleDelete = () => {
    setDisplay((prevDisplay) => {
      if (prevDisplay.length === 1) {
        return '0';
      }
      return prevDisplay.slice(0, -1);
    });
  };

  const calculateTotal = () => {
    const total = previousResults.reduce((acc, result) => acc + result, 0);
    return total;
  };

  return (
    <div>
      <div style={{ fontSize: '1.5em' }} className="calculator-display">
        {hasCalculated ? display : display || '0'}
      </div>
      <div>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button
            key={number}
            onClick={() => addToDisplay(number)}
            style={{ fontSize: '1.5em', padding: '10px 20px', margin: '15px' }}
          >
            {number}
          </button>
        ))}
        {operations.map((operator) => (
          <button
            key={operator}
            onClick={() => addToDisplay(operator)}
            style={{ fontSize: '1.5em', padding: '10px 20px', margin: '15px' }}
          >
            {operator}
          </button>
        ))}
        <button
          onClick={resetDisplay}
          style={{ fontSize: '1.5em', padding: '10px 20px', margin: '15px' }}
        >
          C
        </button>
        <button
          onClick={calculateResult}
          style={{ fontSize: '1.5em', padding: '10px 20px', margin: '15px' }}
        >
          =
        </button>
        <button
          onClick={handleDelete}
          style={{ fontSize: '1.5em', padding: '10px 20px', margin: '15px' }}
        >
          DEL
        </button>
      </div>
      <div style={{ marginTop: '20px', fontSize: '1.2em' }}>
        <strong>Previous Results:</strong>
        {previousResults.map((result, index) => (
          <div key={index}>{result}</div>
        ))}
      </div>
      {sabiranjeCount >= 5 && (
        <div style={{ marginTop: '20px', fontSize: '1.2em', color: 'red' }}>
          Dostigli ste maksimum u sabiranju činilaca.
        </div>
      )}
      {sabiranjeCount < 5 && (
        <div style={{ marginTop: '20px', fontSize: '1.2em' }}>
          <strong>Total:</strong> {calculateTotal()}
        </div>
      )}
    </div>
  );
};

export default App;
