import React from 'react';
import ReactDOM from 'react-dom';

import Landing from 'app/pages/Landing';
import 'app/styles/index.styl';

ReactDOM.hydrate(
  <Landing />,
  document.getElementById('app'),
);
