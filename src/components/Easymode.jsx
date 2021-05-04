import React from 'react';
import PropTypes from 'prop-types';
import Level from './Level';

function Easymode({
  sideSelect, urlSearch, pairCount, setCurrentPairCount, currentPairCount,
}) {
  return (
    <>
      <Level
        pairCount={pairCount}
        sideSelect={sideSelect}
        urlSearch={urlSearch}
        setCurrentPairCount={setCurrentPairCount}
        currentPairCount={currentPairCount}
      />
    </>
  );
}
Easymode.propTypes = {
  sideSelect: PropTypes.number.isRequired,
  urlSearch: PropTypes.string.isRequired,
  pairCount: PropTypes.number.isRequired,
  setCurrentPairCount: PropTypes.func.isRequired,
  currentPairCount: PropTypes.number.isRequired,
};
export default Easymode;
