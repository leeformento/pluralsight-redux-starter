import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import homePage from './components/home/HomePage';
import aboutPage from './components/AboutPage';

export default (
    <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    </Route>

)