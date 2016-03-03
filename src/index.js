import 'bootstrap-loader';
import 'bootstrap-material-design/dist/sassc/bootstrap-material-design.css';
import 'bootstrap-material-design/dist/sassc/ripples.css';
import 'bootstrap-material-design/dist/js/material.js';
import 'bootstrap-material-design/dist/js/ripples.js';

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main/Main';



// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));

$.material.init();
