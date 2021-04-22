/* eslint-disable object-shorthand */
import React, { useEffect, useState } from 'react';
import './Css/GameBoard.css';
import axios from 'axios';
import Card from './Card';

const GameBoard = ({ pairs }) => {
  const pairVisibleInMilliseconds = 500;
  const [images, setImages] = useState([]);
  const [turns, setTurns] = useState(0);
  const [pairsMatched, setPairsMatched] = useState(0);
  const [openedCards, setOpenedCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const picsumApiUrl = 'https://picsum.photos/200/300';

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    if (images.length === pairs) {
      generateCards();
    }
  }, [images]);

  const openCard = (card) => {
    if (openedCards.length === 2) {
      return;
    }

    let newDeck = [...deck];

    deck.forEach((element, index) => {
      if (element.number === card.number) {
        newDeck[index].open = true;
      }
    });

    setDeck(newDeck);

    let opened = openedCards;
    opened.push(card);
    setOpenedCards(openedCards);

    if (opened.length === 2) {
      setTimeout(() => {
        handlePossibleMatch(opened);
      }, pairVisibleInMilliseconds);
    }
  };

  const handlePossibleMatch = (openedCards) => {
    let newDeck;

    if (cardsMatch(openedCards)) {
      const openedCardNumbers = [openedCards[0].number, openedCards[1].number];
      newDeck = [...deck];

      deck.forEach((element, index) => {
        if (openedCardNumbers.includes(element.number)) {
          newDeck[index].open = false;
          newDeck[index].matched = true;
        }
      });

      setPairsMatched(pairsMatched + 1);
      setDeck(newDeck);
    } else {
      closeCards();
    }

    setTurns(turns + 1);
    setOpenedCards([]);
  };

  const cardsMatch = (cards) => cards[0].pair === cards[1].pair;

  const getImages = async () => {
    let fetchedImages = [];

    while (fetchedImages.length < pairs) {
      const response = await axios.get(picsumApiUrl);

      if (response.request.responseURL) {
        fetchedImages.push(response.request.responseURL);
      }
    }

    setImages(fetchedImages);
  };

  const closeCards = () => {
    let closedDeck = [];

    deck.forEach((card) => {
      card.open = false;
      closedDeck.push(card);
    });

    setDeck(closedDeck);
  };

  const resetGame = () => {
    generateCards();
    setTurns(0);
    setPairsMatched(0);
  };

  const generateCards = React.useCallback(() => {
    let cards = [];
    let cardNumber = 0;

    images.forEach((image, key) => {
      for (let i = 0; i < 2; i++) {
        cardNumber += 1;

        cards.push({
          number: cardNumber,
          pair: key,
          image: image,
          open: false,
          matched: false,
        });
      }
    });

    setDeck(shuffleDeck(cards));
  });

  const shuffleDeck = (cards) => cards
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

  return (
    <>
      <div className="statistics">
        <span>
          Turns:
          {' '}
          {turns}
        </span>

        <span>
          Pairs:
          {' '}
          {pairsMatched}
          {' '}
          of
          {' '}
          {pairs}
        </span>

        { pairsMatched === pairs && (
        <button type="button" onClick={resetGame}>New game</button>
        )}
      </div>
      <div className="plateau">
        <div className="playfield">
          { deck.map((card) => (
            <Card
              key={card.number}
              card={card}
              onCardOpen={openCard}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GameBoard;
