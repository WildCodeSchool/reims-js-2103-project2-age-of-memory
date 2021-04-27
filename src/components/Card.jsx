import React from 'react';
import PropTypes from 'prop-types';
import card from './assets/card.png';
import './Css/Card.css';

const Card = ({ imageUrl, id, setFirstCardClicked }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  function changeState() {
    if (isVisible === false) {
      setIsVisible(!isVisible);
      setFirstCardClicked(id);
    }
  }

  return (
    <div
      className="card-container"
      role="button"
      tabIndex="-1"
      onKeyDown={changeState}
      onClick={changeState}
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
  id: PropTypes.string.isRequired,
  setFirstCardClicked: PropTypes.func.isRequired,
};
export default Card;
