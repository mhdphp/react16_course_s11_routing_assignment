import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch, NavLink} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import AssignmentDescription from './components/AssignmentDescription/AssignmentDescription';
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            {/* <ul className="navList">
              <li><NavLink to="/info">Assignment Description</NavLink></li>
              <li><NavLink to="/courses">Courses</NavLink></li>
              <li><NavLink to="/users">Users</NavLink></li>
            </ul> */}

            {/* solution without NavLink */}
            <ul className="navList">
              <li><a href="/info">Assignment Description</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/users">Users</a></li>
            </ul>
          </nav>
          
          <Switch>
            <Route path="/info" exact component={AssignmentDescription} />
            <Route path="/courses" exact component={Courses}/>
            <Route path="/users" exact component={Users} />
            <Redirect from="/" exact to="/courses"/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
