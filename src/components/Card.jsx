import React from 'react';
import PropTypes from 'prop-types';
import card from './assets/card.png';
import './Css/Card.css';

const Card = ({ imageUrl }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  function changeState() {
    setIsVisible(!isVisible);
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
        src={isVisible ? imageUrl : card}
        alt=""
      />
    </div>
  );
};
Card.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
export default Card;
