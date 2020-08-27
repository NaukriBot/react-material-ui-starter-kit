import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
//import component
import AppNavBar from './AppNavBar';
//import pages
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

export default function AppNavLinks () {
    return (
        <Router>
            <AppNavBar/>
            <Switch>
                <Route exact path="/page1" component={Page1} />
                <Route exact path="/page2" component={Page2} />
            </Switch>
        </Router>
    );
}