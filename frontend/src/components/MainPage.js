import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router";

class MainPage extends React.Component {
  static PropTypes = {
    courses: PropTypes.string.isRequired,
    actions: PropTypes.shape({
      fetchCourses: PropTypes.func.isRequired
    })
  };

  componentDidMount() {
    this.props.actions.fetchCourses();
  }

  render() {
    const {courses} = this.props;

    return (
      <div>
        <Link to="/courses"> Courses </Link>
        <Link to="/students"> Students </Link>
      </div>
    )
  }
}

export default MainPage;