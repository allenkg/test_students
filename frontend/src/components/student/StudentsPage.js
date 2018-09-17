import React from 'react';
import PropTypes from 'prop-types';
import StudentItem from "./StudentItem";


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
            <StudentItem key={index} student={student}/>
          )}
        </div>


      </div>
    );
  }
}

export default StudentsPage;