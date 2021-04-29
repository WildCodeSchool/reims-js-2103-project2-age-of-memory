import React from 'react';
import logo from './components/assets/logo.png';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const [sideSelect, setSideSelect] = React.useState();

  return (
    <>
      <Header sideSelect={sideSelect} logo={logo} />
      <Home
        setSideSelect={setSideSelect}
        sideSelect={sideSelect}
      />
    </>
  );
}
export default App;
