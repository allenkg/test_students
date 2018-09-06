import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router";

class MainPage extends React.Component {
  static PropTypes = {
    actions: PropTypes.shape({
      fetchCourses: PropTypes.func.isRequired
    })
  };


  render() {

    return (
      <div>
        <Link to="/courses"> Courses </Link>
        <Link to="/students"> Students </Link>
      </div>
    )
  }
}

export default MainPage;