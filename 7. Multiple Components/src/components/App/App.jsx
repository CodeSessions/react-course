import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: 'Hello React',
  };

  render() {
    const { text } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col color">
            {text}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
