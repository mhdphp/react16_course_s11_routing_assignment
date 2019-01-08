import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Course from '../Course/Course';
import './Courses.css';


class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedCourse: null,
        showCourses: true
    }

    render () {
        let courses = null;

        courses = this.state.courses.map( course => {
            return (
                /** 
                 * using the dynamic way of defining the url - from the starting point
                 * this.props.match.url
                 */
                <Link 
                    key={course.id} 
                    // passing the parameters in javascript object
                    to ={{
                        pathname: this.props.match.url + '/'+ course.id,
                        search: "?clickedCourseTitle=" + course.title
                    }}>
                    <article className="Course">
                        {course.title}
                    </article>
                </Link>
            );  
        });
        
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>
                <Route path={this.props.match.url + "/:courseId"} component={Course}/>
            </div>
        );
    }
}

export default Courses;
