import React from 'react';
import PropTypes from 'prop-types';
import { tokenApi } from './.vscode/constants';
import Card from './Card';

function Level({
  pairCount, sideSelect, urlSearch, setCurrentPairCount, currentPairCount,
}) {
  const [firstCardClicked, setFirstCardClicked] = React.useState();
  const [secondCardClicked, setSecondCardClicked] = React.useState();

  React.useEffect(() => {
    if (firstCardClicked != null && secondCardClicked != null) {
      if (firstCardClicked.id.slice(0, -2) === secondCardClicked.id.slice(0, -2)) {
        setCurrentPairCount(currentPairCount + 1);
      } else {
        setTimeout(() => firstCardClicked.setIsVisible(false), 500);
        setTimeout(() => secondCardClicked.setIsVisible(false), 500);
      }
      setFirstCardClicked(null);
      setSecondCardClicked(null);
    }
  }, [firstCardClicked, secondCardClicked]);
  const [imageList, setImageList] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${tokenApi}&query=${urlSearch}&orientation=portrait&per_page=${pairCount}`)
      .then((response) => response.json())
      .then((data) => {
        const pairs = data.results.reduce((acc, image) => {
          const { id } = image;
          return [
            ...acc,
            { ...image, id: `${id}a` },
            { ...image, id: `${id}b` },
          ];
        }, []);

        pairs.sort(() => Math.random() - 0.5);
        setImageList(pairs);
      });
  }, [pairCount]);

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
             sideSelect={sideSelect}
             pairCount={pairCount}

           />
         ))
     }
    </>
  );
}
Level.propTypes = {
  pairCount: PropTypes.number.isRequired,
  sideSelect: PropTypes.number.isRequired,
  urlSearch: PropTypes.string.isRequired,
  setCurrentPairCount: PropTypes.func.isRequired,
  currentPairCount: PropTypes.number.isRequired,
};
export default Level;
