import React from 'react';
import logo from './components/assets/logo.png';
import BaniereRomain from './components/assets/BaniereRomain.png';
import BaniereEgypte from './components/assets/BaniereEgypte.png';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const [sideSelect, setSideSelect] = React.useState();

  const sideSelectMap = {
    1: 'Roman%20Empire',
    2: 'Egypt',
  };

  const baniereSelectMap = {
    1: BaniereRomain,
    2: BaniereEgypte,
  };
  return (
    <>
      <Header baniere={baniereSelectMap[sideSelect]} logo={logo} />
      <Home
        setSideSelect={setSideSelect}
        sideSelect={sideSelect}
        urlSearch={sideSelectMap[sideSelect]}
      />
    </>
  );
}
export default App;
