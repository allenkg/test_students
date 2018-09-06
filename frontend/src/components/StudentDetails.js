import React from 'react';
import PropTypes from 'prop-types';
import studentAvatar from "../styles/images/studentAvatar.jpeg";

class StudentDetails extends React.Component {
  static propTypes = {
    studentId: PropTypes.string.isRequired,
    student: PropTypes.object.isRequired,
    actions: PropTypes.shape({
      getStudentDetails: PropTypes.func.isRequired
    })
  };

  componentDidMount() {
    this.props.actions.getStudentDetails(this.props.studentId);
  }

  render() {
    const {student} = this.props;

    return (
      <div className="row">
        <div className="col-lg-3">
          <div className="text-center">
            <img src={student.img} className="avatar img-circle img-thumbnail"
                 alt="avatar"/>
            <h6>Upload a different photo...</h6>
            <input type="file" className="text-center center-block file-upload"/>
          </div>
          <hr/>
          <br/>
        </div>

        <div className="col-lg-6">
          <div className="tab-content">
            <div className="tab-pane active" id="home">
              <form className="form">
                <div className="form-group">
                  <div className="col-lg-12">
                    <label htmlFor="first_name"><h4>First name</h4></label>
                    <input type="text" className="form-control" value={student.first_name} id="first_name"
                           placeholder="first name" title="enter your first name if any."/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12">
                    <label htmlFor="last_name"><h4>Last name</h4></label>
                    <input type="text" className="form-control" value={student.last_name} id="last_name"
                           placeholder="last name" title="enter your last name if any."/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-12">
                    <label htmlFor="phone"><h4>Phone</h4></label>
                    <input type="text" className="form-control" placeholder="enter phone" value={student.phone_number}
                           title="enter your phone number if any."/>
                  </div>
                </div>

                <div className="form-group">

                  <div className="col-lg-12">
                    <label htmlFor="email"><h4>Email</h4></label>
                    <input type="email" className="form-control" value={student.email} id="email" placeholder="you@email.com"
                           title="enter your email."/>
                  </div>
                </div>
                <div className="form-group">

                  <div className="col-lg-12">
                    <label ><h4>Passport</h4></label>
                    <input type="text" className="form-control" value={student.id_number}  placeholder="your id number"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-12">
                    <br/>
                    <button className="btn btn-lg btn-success" type="submit"><i
                      className="glyphicon glyphicon-ok-sign"/> Save
                    </button>
                    <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"/> Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default StudentDetails;