import React from 'react';
import logo from './components/assets/logo.png';
import Baniere from './components/assets/Baniere.png';
import BaniereRomain from './components/assets/BaniereRomain.png';
import BaniereEgypte from './components/assets/BaniereEgypte.png';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const [sideSelect, setSideSelect] = React.useState(1);
  console.log(sideSelect);
  if (sideSelect === 2) {
    const urlSearch = 'Roman%20Empire';
    return (
      <>
        <Header Baniere={BaniereRomain} logo={logo} />
        <Home setSideSelect={setSideSelect} sideSelect={sideSelect} urlSearch={urlSearch} />
      </>
    );
  } if (sideSelect === 3) {
    const urlSearch = 'Egypt';
    return (
      <>
        <Header Baniere={BaniereEgypte} logo={logo} />
        <Home setSideSelect={setSideSelect} sideSelect={sideSelect} urlSearch={urlSearch} />
      </>
    );
  }
  return (
    <div className="App">
      <Header Baniere={Baniere} logo={logo} />
      <Home setSideSelect={setSideSelect} sideSelect={sideSelect} />
    </div>
  );
}

export default App;
