import React from 'react';
import PropTypes from 'prop-types';
import './Css/GameBoard.css';
import Easymode from './Easymode';

function GameBoard({
  sideSelect,
  urlSearch,
  pairCount,
  setPairCount,
  setGameBoard,
  setEndPageIsDisplayed,
}) {
  const [currentPairCount, setCurrentPairCount] = React.useState(0);
  function nexttLevel() {
    if (pairCount < 12) {
      setPairCount(pairCount + 3);
      setCurrentPairCount(0);
    } else {
      setEndPageIsDisplayed(true);
    }
      setGameBoard(false);
    }
  }
  function modalWin() {
    return (
      <>
        <div className="ModalWin">
          <p className="Win">Niveau complété, bien Joué ! 🧙🏽‍♂️ </p>
          <button className="button" type="button" onClick={() => { setGameBoard(false); }}>Accueil</button>
          <button className="button" type="button" onClick={nexttLevel}>Niveau Suivant</button>
        </div>
      </>
    );
  }
  return (
    <>
      <span className="pairMatched">
        Pairs:
        {' '}
        {currentPairCount}
        {' '}
        sur
        {' '}
        {pairCount}
      </span>

      { currentPairCount === pairCount && (
        modalWin()
      )}

      <div className="Gameboard">
        { currentPairCount !== pairCount && (
        <Easymode
          sideSelect={sideSelect}
          urlSearch={urlSearch}
          pairCount={pairCount}
          setCurrentPairCount={setCurrentPairCount}
          currentPairCount={currentPairCount}
          setPairCount={setPairCount}
        />
        )}
      </div>
    </>
  );
}
GameBoard.propTypes = {
  sideSelect: PropTypes.number.isRequired,
  urlSearch: PropTypes.string.isRequired,
  pairCount: PropTypes.number.isRequired,
  setPairCount: PropTypes.func.isRequired,
  setGameBoard: PropTypes.func.isRequired,
  setEndPageIsDisplayed: PropTypes.func.isRequired,
};

export default GameBoard;
