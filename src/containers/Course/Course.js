import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }

    componentDidMount () {
        // URLSearchParams() a parser for URL strings
        const query = new URLSearchParams(this.props.location.search);

        // result in an array of keys and values - query.entries()
        for (let item of query.entries()) {
            // item is an array with two elements, first is the key 'title'
            // the second is the value
            console.log(item);
            this.setState({courseTitle: item[1]});
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