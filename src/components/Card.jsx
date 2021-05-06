import React from 'react';
import PropTypes from 'prop-types';
import './Css/Card.css';
import cardE from './assets/cardE.png';
import cardR from './assets/cardR.png';

const Card = ({
  imageUrl, id, setFirstCardClicked, setSecondCardClicked,
  firstCardClicked, sideSelect, pairCount,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const cardSelectMap = {
    1: cardR,
    2: cardE,
  };
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
  React.useEffect(() => {
    setIsVisible(false);
  }, [pairCount]);

  return (
    <div
      className="card-container"
      role="button"
      tabIndex="-1"
      onKeyDown={changeState}
      onClick={!isVisible ? changeState : null}
    >
      <img
        className="card"
        src={isVisible ? imageUrl : cardSelectMap[sideSelect]}
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
  sideSelect: PropTypes.number.isRequired,
  pairCount: PropTypes.number.isRequired,

};
Card.defaultProps = {
  firstCardClicked: undefined,
};
export default Card;
