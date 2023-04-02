import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './styles/index.scss';

const Root = () => {
  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
