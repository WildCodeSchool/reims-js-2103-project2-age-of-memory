/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Css/Card.css';

const Card = ({ card, onCardOpen }) => {
  const clickHandler = () => {
    if (!card.open && !card.matched) {
      onCardOpen(card);
    }
  };

  const getCard = () => {
    if (card.matched) {
      return (
        <>
        </>
      );
    } if (card.open) {
      return (<img src={card.image} alt="" />);
    }

    return (<div className="not-opened" />);
  };

  return (

    <div className={`card${card.matched ? ' matched' : ''}`} onClick={clickHandler}>
      {getCard()}
    </div>
  );
};

export default Card;
