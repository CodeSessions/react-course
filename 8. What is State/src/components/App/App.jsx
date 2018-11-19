import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Person } from '../index';
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
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col color">
              <Person />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
