import React from "react";

import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconText: "sun",
  },
  winter: {
    text: "Burr, it is Chilly",
    iconText: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconText } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconText} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconText} icon`}></i>
    </div>
  );
};

SeasonDisplay.propTypes = {
  lat: Number,
};

export default SeasonDisplay;
