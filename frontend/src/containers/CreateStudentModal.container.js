import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap-modal';
import StudentsPageActions from "../actions/students-page";

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
    })
  };

  saveStudent = () => {
    this.props.actions.createStudent();
    this.props.actions.createStudentModalHide();
  };

  renderBody = () => {
    return (
      <div>
        <input type="text" onChange={this.firstNameChangeClick} value={this.props.firstName} placeholder="First Name"/>
        <input type="text" onChange={this.lastNameChangeClick} value={this.props.lastName} placeholder="Last Name"/>
        <input type="email" onChange={this.emailChangeClick} value={this.props.email} placeholder="Email"/>
        <input type="text" onChange={this.phoneNumberChangeClick} value={this.props.phoneNumber} placeholder="phone Number"/>
        <input type="text" onChange={this.idNumberChangeClick} value={this.props.idNumber} placeholder="Id Number"/>
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
            Create Student</span></Modal.Title>
        </Modal.Header>
        <Modal.Body className={"modal-body"}>
          {this.renderBody()}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-default" onClick={actions.createCourseModalHide}> Cancel</button>
          <button className="btn btn-success" onClick={this.saveStudent}> Start course</button>
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