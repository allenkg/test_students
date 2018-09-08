import React from 'react';
import PropTypes from 'prop-types';
import studentAvatar from "../styles/images/studentAvatar.jpeg";

class StudentDetails extends React.Component {

  static propTypes = {
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
    this.props.actions.getStudentDetails(this.props.studentId);
  }

  changeStudentFirstName = (e) => this.props.actions.changeFirstName(e.target.value);

  changeStudentLastName = (e) => this.props.actions.changeLastName(e.target.value);

  changeStudentEmail = (e) => this.props.actions.changeEmail(e.target.value);

  changeStudentPhoneNumber = (e) => this.props.actions.changePhoneNumber(e.target.value);

  changeStudentIdNUmber = (e) => this.props.actions.changeIdNumber(e.target.value);

  saveChanges=()=> {
    console.log('fghjkl');
    this.props.actions.save()
  };

  changeImage=(e)=> {
    e.preventDefault();
    const file = e.target.files[0];
    this.props.actions.changeImage(file)
  };

  render() {
    const {student, firstName, lastName, email, phoneNumber, idNumber} = this.props;

    return (
      <div className="row">
        <div className="col-lg-3">
          <div className="text-center">
            <img src={student.img} className="avatar img-circle img-thumbnail"
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
                  <div className="col-lg-12">
                    <label htmlFor="first_name"><h4>First name</h4></label>
                    <input type="text" className="form-control" value={firstName} placeholder="first name"
                           onChange={this.changeStudentFirstName}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12">
                    <label htmlFor="last_name"><h4>Last name</h4></label>
                    <input type="text" className="form-control" value={lastName} placeholder="last name"
                           onChange={this.changeStudentLastName}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12">
                    <label htmlFor="phone"><h4>Phone</h4></label>
                    <input type="text" className="form-control" placeholder="enter phone" value={phoneNumber}
                           onChange={this.changeStudentPhoneNumber}/>
                  </div>
                </div>

                <div className="form-group">

                  <div className="col-lg-12">
                    <label htmlFor="email"><h4>Email</h4></label>
                    <input type="email" className="form-control" value={email} placeholder="you@email.com"
                           onChange={this.changeStudentEmail}/>
                  </div>
                </div>
                <div className="form-group">

                  <div className="col-lg-12">
                    <label><h4>Passport</h4></label>
                    <input type="text" className="form-control" value={idNumber} placeholder="your id number"
                           onChange={this.changeStudentIdNUmber}/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-12">
                    <br/>
                    <button className="btn btn-lg btn-success" onClick={this.saveChanges}><i
                      className="glyphicon glyphicon-ok-sign"/> Save
                    </button>
                    <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"/> Reset
                    </button>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default StudentDetails;