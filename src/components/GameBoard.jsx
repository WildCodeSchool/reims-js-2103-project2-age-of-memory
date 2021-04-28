import React from 'react';
import PropTypes from 'prop-types';
import './Css/GameBoard.css';
import Easymode from './Easymode';

function GameBoard({ sideSelect, urlSearch }) {
  return (
    <div className="Gameboard">
      <Easymode sideSelect={sideSelect} urlSearch={urlSearch} />
    </div>
  );
}
GameBoard.propTypes = {
  sideSelect: PropTypes.number.isRequired,
  urlSearch: PropTypes.string.isRequired,
};

export default GameBoard;
