import React from 'react';
import PropTypes from 'prop-types';
import { tokenApi } from '../.vscode/constants';
import Card from './Card';

function Level({ pairCount }) {
  const [firstCardClicked, setFirstCardClicked] = React.useState();
  const [secondCardClicked, setSecondCardClicked] = React.useState();

  React.useEffect(() => {
    if (firstCardClicked != null && secondCardClicked != null) {
      if (firstCardClicked.id === secondCardClicked.id) {
        console.log('match');
      } else {
        console.log('NotMatch');
        setTimeout(() => firstCardClicked.setIsVisible(false), 1000);
        setTimeout(() => secondCardClicked.setIsVisible(false), 1000);
      }
      setFirstCardClicked(null);
      setSecondCardClicked(null);
    }
  }, [firstCardClicked, secondCardClicked]);
  const [imageList, setImageList] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${tokenApi}&query=Roman%20Empire&orientation=portrait&per_page=${pairCount}`)
      .then((response) => response.json())
      .then((data) => {
        const shuffledImageList = [...data.results, ...data.results];
        shuffledImageList.sort(() => Math.random() - 0.5);
        setImageList(shuffledImageList);
      });
  }, []);

  return (
    <>
      {
         imageList.map((image) => (
           <Card
             key={image.id}
             imageUrl={image.urls.thumb}
             id={image.id}
             firstCardClicked={firstCardClicked}
             setFirstCardClicked={setFirstCardClicked}
             setSecondCardClicked={setSecondCardClicked}
           />
         ))
     }
    </>
  );
}
Level.propTypes = {
  pairCount: PropTypes.number.isRequired,
};
export default Level;
