import React from 'react';
import PropTypes from 'prop-types';
import StudentDetailsCoursesBlock from "./StudentDetailsCoursesBlock";
import StudentDetailsImageBlock from "./StudentDetailsImageBlock";
import ModalCourse from "../../containers/course/ModalCourse.container";


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
    course: PropTypes.object.isRequired,
    showCourse: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      getStudentDetails: PropTypes.func,
      changeFirstName: PropTypes.func,
      changeLastName: PropTypes.func,
      changeEmail: PropTypes.func,
      changePhoneNumber: PropTypes.func,
      changeIdNumber: PropTypes.func,
      changeImage: PropTypes.func,
      showCourseDetails: PropTypes.func,
      save: PropTypes.func
    }.isRequired)
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

  saveChanges = () => this.props.actions.save();

  render() {
    const { student, firstName, lastName, email, phoneNumber, idNumber, courses } = this.props;

    return (
      <div className="row mt-lg-4">
        <StudentDetailsImageBlock student={student} changeImage={this.props.actions.changeImage}/>
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
                  <button className="btn btn-lg btn-primary ml-3" onClick={this.saveChanges}><i
                    className="glyphicon glyphicon-ok-sign"/> Save
                  </button>
                  <button className="btn btn-lg btn-default"><i className="glyphicon glyphicon-repeat"/> Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <StudentDetailsCoursesBlock
          courses={courses}
          student={student}
          showCourseDetails={this.props.actions.showCourseDetails}
        />
        <ModalCourse/>
      </div>

    );
  }
}

export default StudentDetails;