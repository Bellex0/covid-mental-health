import React from 'react';
import ReactDOM from 'react-dom';

import Line from './components/line1';
import './styles.css';

function App() {
  return (
    <div className="App">
     
      <div style={{ height: 500 }}>
        <Line />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
