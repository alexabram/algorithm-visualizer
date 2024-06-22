import React, { useState } from 'react';
import { BubbleSorter } from './algorithms/BubbleSorter';

const App: React.FC = () => {
  const [numbers, setNumbers] = useState([
    8, 3, 12, 6, 10, 1, 14, 4, 9, 5, 7, 13, 2, 15, 11,
  ]);
  const bubbleSorter = new BubbleSorter();
  const handleClick = () => {
    setNumbers(bubbleSorter.sort([...numbers]));
  };

  return (
    <>
      <h1>Algorithm Visualizer</h1>
      <Display numbers={numbers} />
      <button onClick={() => handleClick()}>Click until sorted.</button>
    </>
  );
};

interface DisplayProps {
  numbers: number[];
}

const Display: React.FC<DisplayProps> = ({ numbers }) => {
  return (
    <>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
