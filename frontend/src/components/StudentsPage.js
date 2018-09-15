import React from 'react';
import PropTypes from 'prop-types';
import studentAvatar from "../styles/images/studentAvatar.jpeg";
import {Link} from "react-router";

class StudentsPage extends React.Component {
  static propTypes = {
    students: PropTypes.array.isRequired,
    actions: PropTypes.shape({
      fetchStudents: PropTypes.func.isRequired
    })
  };

  componentDidMount() {
    this.props.actions.fetchStudents();
  }

  render() {
    const {students} = this.props;
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Students</h1>
        </div>

        <div className="card-deck mb-3 text-center">
          {students.map((student, index) =>
            <div className="col-lg-3" key={index}>
              <img className="rounded-circle" src={student.img ? student.img: studentAvatar} alt="Generic placeholder image" width="140"
                   height="140"/>
              <h5>{student.first_name} {student.last_name} </h5>
              <p><Link to={`/students/${student.id}`} className="btn btn-secondary" href="#" role="button">View details »</Link></p>
            </div>
          )}
        </div>


      </div>
    );
  }
}

export default StudentsPage;