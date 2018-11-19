import React from 'react';
import PropTypes from 'prop-types';

const Person = ({age, name}) => (
  <span>Hi, I'm {name} and I'm {age} years old.</span>
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
