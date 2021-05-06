import React from 'react';
import PropTypes from 'prop-types';
import GameBoard from './GameBoard';
import './Css/Home.css';

function Home({
  sideSelect,
  setSideSelect,
  gameBoard,
  setGameBoard,
  setEndPageIsDisplayed,
}) {
  const sideSelectMap = {
    1: 'Roman%20Empire',
    2: 'Egypt',
  };
  const [buttonRomanClicked, setButtonRomanClicked] = React.useState(false);
  const [buttonEgyptClicked, setButtonEgyptClicked] = React.useState(false);

  function onClickButtonRoman() {
    setSideSelect(1);
    setButtonRomanClicked(!buttonRomanClicked);
    setButtonEgyptClicked(false);
  }

  function onClickButtonEgypt() {
    setSideSelect(2);
    setButtonEgyptClicked(!buttonEgyptClicked);
    setButtonRomanClicked(false);
  }

  const [pairCount, setPairCount] = React.useState(3);
  function onChangePairCount(e) {
    setPairCount(parseInt(e.target.value, 10));
  }

  function handleChangeBoolean() {
    if (sideSelect != null) {
      setGameBoard(!gameBoard);
    } else {
      alert('Choisis d\'abord ton camp pour pouvoir jouer !');
    }
  }
  if (gameBoard === true) {
    return (
      <GameBoard
        sideSelect={sideSelect}
        urlSearch={sideSelectMap[sideSelect]}
        pairCount={pairCount}
        setPairCount={setPairCount}
        setGameBoard={setGameBoard}
        setEndPageIsDisplayed={setEndPageIsDisplayed}
      />
    );
  }

  return (
    <>
      <div className="side-select">
        <div className="side-camp">
          <div className="title-camp">
            <h2>Choisis ton camp</h2>
          </div>
          <div className="side-select-btn">
            <button type="button" className={buttonRomanClicked ? 'btn-roman-clicked' : 'btn-roman'} onClick={onClickButtonRoman}>Romain</button>
            <button type="button" className={buttonEgyptClicked ? 'btn-egypt-clicked' : 'btn-egypt'} onClick={onClickButtonEgypt}>Egyptien</button>

          </div>
        </div>
      </div>

      <div className="btn-container">
        <div className="select-container">

          <select className="browser-default custom-select" onChange={onChangePairCount}>
            <option value={3}>Facile</option>
            <option value={6}>Moyen</option>
            <option value={9}>Difficile</option>
            <option value={12}>Hardcore</option>
          </select>

        </div>
        <div className="play-container">
          <button className="btn-play" type="button" onClick={handleChangeBoolean}>Play</button>
        </div>
      </div>
    </>
  );
}
Home.propTypes = {
  setSideSelect: PropTypes.func.isRequired,
  sideSelect: PropTypes.number.isRequired,
  setEndPageIsDisplayed: PropTypes.func.isRequired,
  gameBoard: PropTypes.bool.isRequired,
  setGameBoard: PropTypes.func.isRequired,
};
export default Home;
