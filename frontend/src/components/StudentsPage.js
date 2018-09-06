import React from 'react';
import PropTypes from 'prop-types';
import studentAvatar from "../styles/images/studentAvatar.jpeg";

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
    console.log(students);
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Students</h1>
          <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap
            example. It's built with default Bootstrap components and utilities with little customization.</p>
        </div>

        <div className="card-deck mb-3 text-center">
          {students.map((student, index) =>
            <div className="card" style={{width: "18rem"}} key={index}>
              <p className="text-center mt-2">
                <img className="card-img-top" src={studentAvatar} alt="Card image cap" style={{width: "40%"}}/>
              </p>
              <div className="card-body">
                <h5 className="card-title">{student.first_name} {student.last_name}</h5>
                <p className="card-text" style={{fontSize: "1.5vw"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary" style={{fontSize: "1vw"}}>See Student details</a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default StudentsPage;