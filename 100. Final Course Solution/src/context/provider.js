import React, { Component } from 'react';
import Context from './index';

export default class Provider extends Component {
  state = {
    age: 28,
    name: 'Oriol',
  };

  _increase = () => this.setState({ age: this.state.age + 1 });

  render() {
    return (
      <Context.Provider value={{
        state: this.state,
        increase: this._increase
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
