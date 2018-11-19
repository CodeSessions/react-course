import React from 'react';
import PropTypes from 'prop-types';
import Context from '../../context';

const Person = () => (
  <Context.Consumer>
    {ctx => (
      <span>Hi, I'm {ctx.state.name} and I'm {ctx.state.age} years old.</span>
    )}
  </Context.Consumer>
);

Person.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,
};

Person.defaultProps = {
  age: 0,
  name: 'no one',
};

export default Person;
