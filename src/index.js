import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';
import './index.css';

function Root() {
  return <App />;
}

ReactDOM.render(<Root />, document.getElementById('root'));
