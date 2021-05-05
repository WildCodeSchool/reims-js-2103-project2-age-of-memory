import React from 'react';
import PropTypes from 'prop-types';
import Level from './Level';

function Easymode({
  sideSelect, urlSearch, pairCount, setCurrentPairCount, currentPairCount, setPairCount,
}) {
  return (
    <>
      <Level
        pairCount={pairCount}
        sideSelect={sideSelect}
        urlSearch={urlSearch}
        setCurrentPairCount={setCurrentPairCount}
        currentPairCount={currentPairCount}
        setPairCount={setPairCount}
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
  setPairCount: PropTypes.func.isRequired,
};
export default Easymode;
