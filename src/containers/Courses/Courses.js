import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                    // passing two parameters in route
                    to={this.props.match.url + '/'+ course.id + '/' + course.title}>
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
            </div>
        );
    }
}

export default Courses;