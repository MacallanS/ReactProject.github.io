import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('renders the application without crashing', () => {
  const rootElement = document.createElement('div');
  rootElement.id = 'root';
  document.body.appendChild(rootElement);

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    { container: rootElement }
  );
});
