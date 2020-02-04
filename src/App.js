import React from 'react';

import './css/App.css';

import Dog from './images/dog.jpeg';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <img src = {Dog} alt='dog'/>
    </div>
  );
}

export default App;
