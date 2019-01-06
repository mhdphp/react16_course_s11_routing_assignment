import React, { Component } from 'react';

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
        show: false
    }

    showCourseHandler = (id) => {
        const course = {...this.state.courses[id-1]};
        this.setState({
            show: true,
            selectedCourse: course
        });
    }

    render () {
        let courseToDisplay = null;
        let courses = null;

        if(this.state.selectedCourse){
            courseToDisplay = <Course 
                        courseStyle={{margin: '0 auto', color: 'darkgreen'}}
                        title={this.state.selectedCourse.title}
                        courseId={this.state.selectedCourse.id}/>
        } else {
            courses = (
                this.state.courses.map( course => {
                    return (
                        <article 
                            className="Course" 
                            key={course.id}
                            onClick={() => this.showCourseHandler(course.id)}>
                            {course.title}
                        </article>
                    );    
                })
            );
        }
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                    {courseToDisplay}
                </section>
            </div>
        );
    }
}

export default Courses;