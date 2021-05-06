import React from 'react';
import logo from './components/assets/logo.png';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const [sideSelect, setSideSelect] = React.useState();
  const [gameBoard, setGameBoard] = React.useState(false);

  return (
    <>
      <Header
        sideSelect={sideSelect}
        logo={logo}
        gameBoard={gameBoard}
        setGameBoard={setGameBoard}
      />
      <Home
        setSideSelect={setSideSelect}
        sideSelect={sideSelect}
        gameBoard={gameBoard}
        setGameBoard={setGameBoard}
      />
    </>
  );
}
export default App;
