import React from 'react';
import './App.css';

import { useMarked as useMarkedLocal } from './local';
import { useMarked as useMarkedLib } from 'my-lib';

function tryUseMarked(fn: () => void) {
  try {
    fn();
    return 'Success!';
  } catch (err) {
    return `${err}`;
  }
}

function App() {
  return (
    <>
      <h1>Results:</h1>
      <div>
        Local:
        {tryUseMarked(useMarkedLocal)}
      </div>
      <div>
        Library:
        {tryUseMarked(useMarkedLib)}
      </div>
    </>
  );
}

export default App;
