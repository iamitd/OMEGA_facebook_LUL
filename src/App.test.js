import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import OmegaApp from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OmegaApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
