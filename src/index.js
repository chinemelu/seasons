import React from "react";
import ReactDOM from "react-dom";

import Loader from "./Loader.jsx";
import SeasonDisplay from "./SeasonDisplay";
class App extends React.Component {
  state = {
    lat: null,
    errorMessage: "",
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    return <Loader loadingText="Please accept location request" />;
  }

  // React says we have to define render!!
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
