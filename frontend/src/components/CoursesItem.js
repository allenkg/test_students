import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router";

class CoursesItem extends React.Component {
  static propTypes = {
    course: PropTypes.object.isRequired
  };

  render() {
    const { course } = this.props;
    return (
      <div className="col-md-3 mb-3">

        <div >
          <h5 >{course.title}</h5>
          <div className="description-course"> <small style={{fontSize: "1vw"}}>{course.description}</small></div>
        </div>
          <div className="mt-3">
            <Link href={`/courses/${course.id}`} className="btn btn-primary" style={{fontSize: "1vw"}}>See details</Link></div>
      </div>
    );
  }
}

export default CoursesItem;