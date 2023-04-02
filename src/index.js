import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import './styles/index.scss';

function Root() {
  return <App />;
}

ReactDOM.render(<Root />, document.getElementById('root'));
