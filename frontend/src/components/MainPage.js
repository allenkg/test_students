import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router";
import StudentItem from "./StudentItem";
import CoursesItem from "./CoursesItem";

class MainPage extends React.Component {
  static PropTypes = {
    students: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    hasSearchResult: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      fetchCourses: PropTypes.func.isRequired,
      setInitialState: PropTypes.func.isRequired
    })
  };

  componentWillUnmount() {
    this.props.actions.setInitialState();
  }

  render() {

    return (
      <div>
       <div>
         <Link to="/courses"> Courses </Link>
        <Link to="/students"> Students </Link>
       </div>
        { this.props.hasSearchResult &&
        <div className="col-lg-12">
          <h5> Searching result </h5>
          <div className="card-deck mb-3 text-center">
          {this.props.students.map((student, index) =>
            <StudentItem key={index} student={student}/>
          )}
        </div>
          <h3> search result courses </h3>
          <div className="card-deck mb-3 text-center ">
          {this.props.courses.map((course, index) =>
            <CoursesItem course={course} key={index}/>
          )}
        </div>
        </div>
        }
      </div>
    )
  }
}

export default MainPage;