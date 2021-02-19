import React from "react";

const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.loadingText}</div>
    </div>
  );
};

Loader.defaultProps = {
  loadingText: "Loading...",
};

Loader.propTypes = {
  loadingText: String,
};

export default Loader;
