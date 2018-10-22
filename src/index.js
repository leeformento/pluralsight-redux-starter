import 'babel-polyfill'; //50k minified
import React from 'react';
import { render } from 'react-dom'; // browser
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
