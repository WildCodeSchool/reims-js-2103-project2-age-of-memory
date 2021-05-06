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
  }
  return (
    <>
      <span className="pairMatched">
        Pairs:
        {' '}
        {currentPairCount}
        {' '}
        of
        {' '}
        {pairCount}
      </span>

      { currentPairCount === pairCount && (
        <div className="ModalWin">
          <p className="Win">Bien Joué bg t&apos;es un adepte de magie noire !!</p>
          <button className="button" type="button" onClick={() => { setGameBoard(false); }}>Accueil</button>
          <button className="button" type="button" onClick={nexttLevel}>Niveau Suivant</button>
        </div>
      )}

      <div className="Gameboard">
        <Easymode
          sideSelect={sideSelect}
          urlSearch={urlSearch}
          pairCount={pairCount}
          setCurrentPairCount={setCurrentPairCount}
          currentPairCount={currentPairCount}
          setPairCount={setPairCount}
        />
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
