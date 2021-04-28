import React from 'react';
import PropTypes from 'prop-types';
import { tokenApi } from './.vscode/constants';
import Card from './Card';

function Level({ pairCount }) {
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
           <Card key={image.id} imageUrl={image.urls.thumb} />
         ))
     }
    </>
  );
}
Level.propTypes = {
  pairCount: PropTypes.number.isRequired,
};
export default Level;
