import React from 'react';
import PropTypes from 'prop-types';
import './Css/Card.css';
import cardE from './assets/cardE.png';
import cardR from './assets/cardR.png';

const Card = ({ imageUrl, sideSelect }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  function changeState() {
    setIsVisible(!isVisible);
  }

  if (sideSelect === 1) {
    return (
      <div
        className="card-container"
        role="button"
        tabIndex="-1"
        onKeyDown={changeState}
        onClick={!isVisible && changeState}
      >
        <img
          className="card"
          src={isVisible ? imageUrl : cardR}
          alt=""
        />
      </div>
    );
  }
  return (
    <div
      className="card-container"
      role="button"
      tabIndex="-1"
      onKeyDown={changeState}
      onClick={!isVisible && changeState}
    >
      <img
        className="card"
        src={isVisible ? imageUrl : cardE}
        alt=""
      />
    </div>
  );
};
Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  sideSelect: PropTypes.number.isRequired,
};
export default Card;
