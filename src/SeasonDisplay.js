import React from "react";

const getSeason = (lat, month) => {

};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  return <div>Season Display</div>;
};

SeasonDisplay.propTypes = {
  lat: Number,
};

export default SeasonDisplay;
