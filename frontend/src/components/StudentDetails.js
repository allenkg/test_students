import React from 'react';
import PropTypes from 'prop-types';
import studentAvatar from "../styles/images/studentAvatar.jpeg";
import {Link} from "react-router";


class StudentDetails extends React.Component {

  static propTypes = {
    courses: PropTypes.array.isRequired,
    studentId: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    idNumber: PropTypes.string.isRequired,
    student: PropTypes.object.isRequired,
    actions: PropTypes.shape({
      getStudentDetails: PropTypes.func.isRequired,
      changeFirstName: PropTypes.func.isRequired,
      changeLastName: PropTypes.func.isRequired,
      changeEmail: PropTypes.func.isRequired,
      changePhoneNumber: PropTypes.func.isRequired,
      changeIdNumber: PropTypes.func.isRequired,
      changeImage: PropTypes.func.isRequired,
      save: PropTypes.func.isRequired
    })
  };

  componentDidMount() {
    this.props.actions.fetchCourses();
    this.props.actions.getStudentDetails(this.props.studentId);
  }

  changeStudentFirstName = (e) => this.props.actions.changeFirstName(e.target.value);

  changeStudentLastName = (e) => this.props.actions.changeLastName(e.target.value);

  changeStudentEmail = (e) => this.props.actions.changeEmail(e.target.value);

  changeStudentPhoneNumber = (e) => this.props.actions.changePhoneNumber(e.target.value);

  changeStudentIdNUmber = (e) => this.props.actions.changeIdNumber(e.target.value);

  saveChanges=()=> this.props.actions.save();

  changeImage=(e)=> {
    e.preventDefault();
    const file = e.target.files[0];
    this.props.actions.changeImage(file)
  };

  render() {
    const {student, firstName, lastName, email, phoneNumber, idNumber} = this.props;
    const coursesSection = student.courses ? 'Student course': 'Available courses';
    const studentImage = student.img ? student.img : studentAvatar;

    return (
      <div className="row mt-lg-4">
        <div className="col-lg-3">
          <div className="text-center">
            <img src={studentImage} className="avatar img-circle img-thumbnail"
                 alt="avatar"/>
            <h6>Upload a different photo...</h6>
            <input type="file" className="text-center center-block file-upload" onChange={this.changeImage}/>
          </div>
          <hr/>
          <br/>
        </div>

        <div className="col-lg-6">
          <div className="tab-content">
            <div className="tab-pane active" id="home">
                <div className="form-group">
                  <div className="col-lg-8">
                    <label htmlFor="first_name"><h6>First name</h6></label>
                    <input type="text" className="form-control" value={firstName} placeholder="first name"
                           onChange={this.changeStudentFirstName}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-8">
                    <label htmlFor="last_name"><h6>Last name</h6></label>
                    <input type="text" className="form-control" value={lastName} placeholder="last name"
                           onChange={this.changeStudentLastName}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-8">
                    <label htmlFor="phone"><h6>Phone</h6></label>
                    <input type="text" className="form-control" placeholder="enter phone" value={phoneNumber}
                           onChange={this.changeStudentPhoneNumber}/>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-lg-8">
                    <label htmlFor="email"><h6>Email</h6></label>
                    <input type="email" className="form-control" value={email} placeholder="you@email.com"
                           onChange={this.changeStudentEmail}/>
                  </div>
                </div>
                <div className="form-group">

                  <div className="col-lg-8">
                    <label><h6>Passport</h6></label>
                    <input type="text" className="form-control" value={idNumber} placeholder="your id number"
                           onChange={this.changeStudentIdNUmber}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-12">
                    <br/>
                    <button className="btn btn-primary ml-4" onClick={this.saveChanges}><i
                      className="glyphicon glyphicon-ok-sign"/> Save
                    </button>
                    <button className="btn " type="reset"><i className="glyphicon glyphicon-repeat"/> Reset
                    </button>
                  </div>
                </div>

            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="col-xs-12 text-center"><h6>{coursesSection}</h6></div>
          <div>
            {student.courses ?
            <div className="text-center">
              Your current course <Link to={`/courses/${student.courses.id}`}> {student.courses.title} </Link>
              <div><small className="text-muted"> You can change your course <Link to='/courses'>click here</Link></small></div>
            </div> :
              <div className="text-center">
                <small>You don't have any course. Please select one</small>
                <ul className="list-group list-group-flush list-group-item-warning mt-lg-2" role="tablist">
                {this.props.courses.map((course, index) =>
                  <li className="list-group-item list-group-item-action" key={index}>{course.title} </li>
                )}
              </ul></div>
            }
          </div>
        </div>
      </div>

    );
  }
}

export default StudentDetails;