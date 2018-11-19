import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';
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
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col color">
              <Person />
              <Context.Consumer>
                {ctx => (
                  <button onClick={ctx.increase}>+1</button>
                )}
              </Context.Consumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
