import React from 'react';
import ReactDOM from 'react-dom';

//* components
import Landing from 'app/pages/Landing';

ReactDOM.hydrate(
  <Landing />,
  document.getElementById('app'),
);
