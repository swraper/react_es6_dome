import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import pkg from '../../package.json';


render(
    <Router basename={!__LOCAL__ ? `/${pkg.name}` : ''}>
        <Routes />
    </Router>,
    document.getElementById('root')
);
