require('bootstrap-sass');
require('bootstrap-material-design');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main/Main';



// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));

$.material.init();
