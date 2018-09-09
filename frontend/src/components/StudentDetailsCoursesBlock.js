import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router";

class StudentDetailsCoursesBlock extends React.Component {
  static propTypes = {
    student: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    showCourseDetails: PropTypes.func.isRequired
  };

  courseClickHandler=(course)=>{
    this.props.showCourseDetails(course)
  };

  render() {
    const {student, courses} = this.props;
    const coursesSection = student.courses ? 'Student course' : 'Available courses';

    return (
      <div className="col-lg-3">
        <div className="col-xs-12 text-center"><h6>{coursesSection}</h6></div>
        <div>
          {student.courses ?
            <div className="text-center">
              Your current course <Link to={`/courses/${student.courses.id}`}> {student.courses.title} </Link>
              <div>
                <small className="text-muted"> You can change your course <Link to='/courses'>click here</Link></small>
              </div>
            </div> :
            <div className="text-center">
              <small>You don't have any course. Please select one</small>
              <ul className="list-group list-group-flush list-group-item-warning mt-lg-2" role="tablist">
                {courses.map((course, index) =>
                  <li className="list-group-item list-group-item-action" key={index}
                      style={{cursor: 'pointer'}} onClick={this.courseClickHandler.bind(null, course)}>{course.title} </li>
                )}
              </ul>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default StudentDetailsCoursesBlock;