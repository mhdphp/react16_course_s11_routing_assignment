import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Course extends Component {
    
    render () {
        console.log(this.props);
        return (
            <div style={this.props.courseStyle}>
                <h1>_TITLE_</h1>
                <p>You have selected course with ID:_ID_</p>
            </div>
        );
    }
}

export default withRouter(Course);