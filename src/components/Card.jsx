import React from 'react';
import PropTypes from 'prop-types';
import card from './assets/cardE.png';
import './Css/Card.css';

const Card = ({
  imageUrl, id, setFirstCardClicked, setSecondCardClicked, firstCardClicked,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  function changeState() {
    if (isVisible === false) {
      setIsVisible(!isVisible);
      if (firstCardClicked != null) {
        setSecondCardClicked({
          id, setIsVisible,
        });
      } else {
        setFirstCardClicked({
          id, setIsVisible,
        });
      }
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
  setSecondCardClicked: PropTypes.func.isRequired,
  firstCardClicked: PropTypes.string,
};
Card.defaultProps = {
  firstCardClicked: undefined,
};
export default Card;
