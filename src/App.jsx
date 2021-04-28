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
    return (
      <>
        <Header Baniere={BaniereRomain} logo={logo} />
        <Home setSideSelect={setSideSelect} sideSelect={sideSelect} />
      </>
    );
  } if (sideSelect === 3) {
    return (
      <>
        <Header Baniere={BaniereEgypte} logo={logo} />
        <Home setSideSelect={setSideSelect} sideSelect={sideSelect} />
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
