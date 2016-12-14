import React from 'react';
import ReactDOM from 'react-dom';
import {ReactRouter,Router,Route,hashHistory,Link} from 'react-router'

import Home from './components/home.react.jsx';
import Book from './components/book.react.jsx';
import Myweb from './components/myweb.react.jsx';
import Ps from './components/ps.react.jsx';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/myweb' component={Myweb} />
        <Route path='/book' component={Book} />
        <Route path='/ps' component={Ps} />
    </Router>,
    document.getElementById('react-application'));
