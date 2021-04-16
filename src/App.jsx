import React from 'react';
import './App.css';
import Home from './components/Home';
import ThemeApi from './.vscode/ThemeApi';

function App() {
  return (
    <div className="App">
      <Home />
      <ThemeApi />
    </div>
  );
}

export default App;
