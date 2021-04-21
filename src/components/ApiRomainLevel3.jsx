import React from 'react';
import './Css/ThemeApi.css';
import { tokenApi } from '../.vscode/constants';

function Level3() {
  const [imageList, setImageList] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=${tokenApi}&query=Roman%20Empire&orientation=portrait&per_page=5`)
      .then((response) => response.json())
      .then((data) => {
        setImageList([...data.results, ...data.results]);
      });
  }, []);
  const shuffledImageList = [...imageList];
  shuffledImageList.sort(() => Math.random() - 0.5);

  return (
    <>
      {
         shuffledImageList.map((image) => (
           <img className="card" src={image.urls.thumb} alt="" />
         ))
     }
    </>
  );
}

export default Level3;
