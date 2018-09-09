import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React from 'react';
import PropTypes from 'prop-types';
import CoursesPageActions from "../actions/courses-page";
import Modal from 'react-bootstrap-modal';

class CreateCourseModal extends React.Component {
  static propTypes = {
    createCourseModalVisible: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      createCourseModalHide: PropTypes.func.isRequired,
      changeTitle: PropTypes.func.isRequired,
      changeDescription: PropTypes.func.isRequired,
      changeCourseImage: PropTypes.func.isRequired,
      createCourse: PropTypes.func.isRequired,
    })
  };

  saveCourse = () => {
    this.props.actions.createCourse();
    this.props.actions.createCourseModalHide()
  };

  renderBody=() => {
    return (
      <div>
        <input type="text" onChange={this.titleChangeClick} value={this.props.title} placeholder="Course Title"/>
        <input type="text" onChange={this.descriptionChangeClick} value={this.props.description} placeholder="Description"/>
      </div>
    )
  };

  titleChangeClick = (e) => {
    e.preventDefault();
    this.props.actions.changeTitle(e.target.value);
  };

  descriptionChangeClick = (e) => {
    e.preventDefault();
    this.props.actions.changeDescription(e.target.value);
  };

  render() {
    const { createCourseModalVisible, actions } = this.props;
    return (
      <Modal
        show={createCourseModalVisible}
        onHide={actions.createCourseModalHide}
        id={'modal-info'}
      >
        <Modal.Header>
          <Modal.Title id='ModalHeader'><span>
            Create course</span></Modal.Title>
        </Modal.Header>
        <Modal.Body className={"modal-body"}>
          {this.renderBody()}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-default" onClick={actions.createCourseModalHide}> Cancel</button>
          <button className="btn btn-success" onClick={this.saveCourse}> Start course</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return state.coursesPage
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CoursesPageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCourseModal);