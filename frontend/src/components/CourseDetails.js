import React from 'react';
import PropTypes from 'prop-types';

class CourseDetails extends React.Component {
  static propTypes = {
    courseId: PropTypes.string.isRequired,
    actions: PropTypes.shape({
      getCourseDetails: PropTypes.func.isRequired
    })
  };

  componentDidMount() {
    this.props.actions.getCourseDetails(this.props.courseId)
  }

  render() {
    return (
      <div>
        <h1>CourseDetails</h1>
      </div>
    );
  }
}

export default CourseDetails;