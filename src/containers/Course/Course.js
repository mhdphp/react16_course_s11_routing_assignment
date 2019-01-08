import React, { Component } from 'react';

class Course extends Component {
    
    render () {
        console.log(this.props);
        return (
            <div>
                <h3 style={{marginTop: '5%', color: 'darkred'}}>
                    {this.props.match.params.courseTitle}
                </h3>
                <p style={{fontWeight: '700'}}>You have selected course with ID:{this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;