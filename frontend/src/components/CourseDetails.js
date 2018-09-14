import React from 'react';
import PropTypes from 'prop-types';

class CourseDetails extends React.Component {
  static propTypes = {
    courseId: PropTypes.string.isRequired,
    course: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      getCourseDetails: PropTypes.func.isRequired
    })
  };

  componentDidMount() {
    this.props.actions.getCourseDetails(this.props.courseId);
    this.props.actions.fetchCourseStudents(this.props.courseId);
  }

  render() {
    const { course, isLoading } = this.props;

    if (isLoading) {
      return (<div>Loading...</div>)
    }

    return (
      <div>
        <h4>{course.title}</h4>
        <p>{course.description}</p>
      </div>
    );
  }
}

export default CourseDetails;