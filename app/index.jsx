import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//* components
import Routes from 'app/routes';

function render() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

if (NODE_ENV === 'production') {
  ReactDOM.hydrate(
    render(),
    document.getElementById('app'),
  );
} else {
  ReactDOM.render(
    render(),
    document.getElementById('app'),
  );
}
