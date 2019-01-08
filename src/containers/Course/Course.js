import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }
    // first we call this method when component is mount
    componentDidMount () {
        this.parseQueryParams();
    }

    // we should this method when update as well
    componentDidUpdate () {
        this.parseQueryParams();
    }

    parseQueryParams () {
        const query = new URLSearchParams(this.props.location.search);
        for (let item of query.entries()) {
            // to avoid infinite looping
            if(this.state.courseTitle !== item[1]){
                this.setState({courseTitle: item[1]});
            }
        }
    }

    render () {
        console.log(this.props);
        return (
            <div>
                <h3 style={{marginTop: '5%', color: 'darkred'}}>
                    {this.state.courseTitle}
                </h3>
                <p style={{fontWeight: '700'}}>You have selected course with ID:{this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;