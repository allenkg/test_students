import React from 'react';
import PropTypes from 'prop-types';
import studentAvatar from "../styles/images/studentAvatar.jpeg";
import {Link} from "react-router";

class StudentItem extends React.Component {
  static propTypes = {
    student: PropTypes.object.isRequired
  };

  render() {
    const { student } = this.props;
    return (
      <div className="col-lg-3">
        <img className="rounded-circle" src={student.img ? student.img: studentAvatar} alt="Generic placeholder image" width="140"
             height="140"/>
        <h5>{student.first_name} {student.last_name} </h5>
        <p><Link to={`/students/${student.id}`} className="btn btn-secondary" href="#" role="button">View details »</Link></p>
      </div>
    );
  }
}

export default StudentItem;