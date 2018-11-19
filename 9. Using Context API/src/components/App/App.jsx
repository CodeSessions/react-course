import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Person } from '../index';
import './App.css';

class App extends Component {
  state = {
    age: 28,
    name: 'Oriol',
  };

  static propTypes = {
    text: PropTypes.string,
  };

  static defaultProps = {
    text: 'Hello React',
  };

  _increase = () => this.setState({ age: this.state.age + 1 });

  render() {
    const { age, name } = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col color">
              <Person age={age} name={name} />
              <button onClick={this._increase}>+1</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
