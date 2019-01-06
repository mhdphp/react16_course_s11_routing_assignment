import React, { Component } from 'react';

class Course extends Component {
    render () {
        return (
            <div style={this.props.courseStyle}>
                <h1>{this.props.title}</h1>
                <p>You selected the Course with ID:{this.props.courseId}</p>
            </div>
        );
    }
}

export default Course;