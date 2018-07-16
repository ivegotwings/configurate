// @flow
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const Greeting = () => React.createElement('h1', null, 'Hello World!!');

const renderApp = () => {
  render(
    <BrowserRouter key={Math.random()}>
      <Greeting />
    </BrowserRouter>,
    document.getElementById('app')
  );
};
renderApp();

// import App from './App';
// if (module.hot) {
//   module.hot.accept('./App', () => {
//     renderApp();
//   });
// }
