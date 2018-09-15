import React from 'react';
import PropTypes from 'prop-types';
import CoursesItem from "./CoursesItem";

class CoursesPage extends React.Component {
  static propTypes = {
    courses: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      fetchCourses: PropTypes.func.isRequired
    })
  };

  componentDidMount() {
    this.props.actions.fetchCourses();
  }

  render() {
    const {courses, isLoading} = this.props;

    if (isLoading) {
      return (<div>isLoading....</div>)
    }
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Courses</h1>
          <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap
            example. It's built with default Bootstrap components and utilities with little customization.</p>
        </div>

        <div className="card-deck mb-3 text-center ">
          {courses.map((course, index) =>
            <CoursesItem course={course} key={index}/>
          )}
        </div>
      </div>
    )
  }
}

export default CoursesPage;