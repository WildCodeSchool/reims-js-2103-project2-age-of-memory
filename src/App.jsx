import React from 'react';
import logo from './components/assets/logo.png';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import EndPage from './components/EndPage';

function App() {
  const [sideSelect, setSideSelect] = React.useState();
  const [endPageIsDisplayed, setEndPageIsDisplayed] = React.useState(false);
  if (endPageIsDisplayed) {
    return (
      <>
        <Header sideSelect={sideSelect} logo={logo} />
        <EndPage />
      </>
    );
  }

  return (
    <>
      <Header sideSelect={sideSelect} logo={logo} />
      <Home
        setSideSelect={setSideSelect}
        sideSelect={sideSelect}
        endPageIsDisplayed={endPageIsDisplayed}
        setEndPageIsDisplayed={setEndPageIsDisplayed}
      />
    </>
  );
}
export default App;
