import React from 'react';
import ReactDOM from 'react-dom'

import Provider from './context/provider';
import { App } from './components';
import './theme/main.scss';

ReactDOM.render(
  <Provider>
    <App text="Hola Mundo!" />
  </Provider>, document.getElementById('root'));
