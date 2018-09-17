import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap-modal';
import StudentsPageActions from "../../actions/students-page";

class CreateStudentModal extends React.Component {
  static propTypes = {
    createStudentModalVisible: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      createStudentModalHide: PropTypes.func.isRequired,
      changeFirstName: PropTypes.func.isRequired,
      changeLastName: PropTypes.func.isRequired,
      changeEmail: PropTypes.func.isRequired,
      changePhoneNumber: PropTypes.func.isRequired,
      changeIdNumber: PropTypes.func.isRequired,
      createStudent: PropTypes.func.isRequired,
      setInitialState: PropTypes.func.isRequired,
    })
  };

  saveStudent = () => {
    this.props.actions.createStudent();
    this.props.actions.createStudentModalHide();
  };

  componentWillUnmount() {
    this.props.actions.setInitialState();
  }


  renderBody = () => {
    return (
      <div className="row">
        <div className="col-md-12 order-md-1">

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="firstName">First name</label>
                <input type="text" className="form-control" id="firstName" onChange={this.firstNameChangeClick}
                       value={this.props.firstName} placeholder="First Name"/>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lastName">Last name</label>
                <input type="text" className="form-control" id="lastName" onChange={this.lastNameChangeClick}
                       value={this.props.lastName} placeholder="Last Name"/>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"
                     onChange={this.emailChangeClick} value={this.props.email}/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Phone number</label>
              <input type="text" className="form-control" id="phone" onChange={this.phoneNumberChangeClick}
                     value={this.props.phoneNumber}
                     placeholder="phone Number"/>
              <div className="invalid-feedback">
                Please enter your phone Number.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="address">Id number</label>
              <input type="text" className="form-control" id="phone" onChange={this.idNumberChangeClick}
                     value={this.props.idNumber} placeholder="Id Number"/>
              <div className="invalid-feedback">
                Please enter your Id Number.
              </div>
            </div>
        </div>
      </div>
    )
  };

  firstNameChangeClick = (e) => {
    e.preventDefault();
    this.props.actions.changeFirstName(e.target.value);
  };

  lastNameChangeClick = (e) => {
    e.preventDefault();
    this.props.actions.changeLastName(e.target.value);
  };

  emailChangeClick = (e) => {
    e.preventDefault();
    this.props.actions.changeEmail(e.target.value);
  };

  phoneNumberChangeClick = (e) => {
    e.preventDefault();
    this.props.actions.changePhoneNumber(e.target.value);
  };

  idNumberChangeClick = (e) => {
    e.preventDefault();
    this.props.actions.changeIdNumber(e.target.value);
  };

  render() {
    const {createStudentModalVisible, actions} = this.props;
    return (
      <Modal
        show={createStudentModalVisible}
        onHide={actions.createStudentModalHide}
        id={'modal-info'}
      >
        <Modal.Header>
          <Modal.Title id='ModalHeader'><span>
            <h4 className="mb-3">Student Registration</h4></span></Modal.Title>
        </Modal.Header>
        <Modal.Body className={"modal-body"}>
          {this.renderBody()}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-default btn-lg" onClick={actions.createCourseModalHide}> Cancel</button>
          <button className="btn btn-primary btn-lg" onClick={this.saveStudent}>Save</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return state.studentsPage
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(StudentsPageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStudentModal);