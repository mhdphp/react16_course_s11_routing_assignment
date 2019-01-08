import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch, NavLink} from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';
import AssignmentDescription from './components/AssignmentDescription/AssignmentDescription';
import './App.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul className="navList">
              <li><NavLink to="/info">Assignment Description</NavLink></li>
              <li><NavLink to="/courses">Courses</NavLink></li>
              <li><NavLink to="/users">Users</NavLink></li>
            </ul>

            {/* solution without NavLink
            <ul className="navList">
              <li><a href="/info">Assignment Description</a></li>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/users">Users</a></li>
            </ul> */}
          </nav>
          
          <Switch>
            <Route path="/info" component={AssignmentDescription} />
           {/* 
            * the name of the params is courseId,
            * the of the params is courseTitle
            * it can be accessed by this.props.match.params.courseId
            * it can be accessed by this.prosps.match.params.courseTitle
            */}
            <Route path="/courses/:courseId" component={Course}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/users" component={Users} />
            <Redirect from="/user-courses" exact to="/courses"/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
