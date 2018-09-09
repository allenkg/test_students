import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap-modal';

class ModalCourse extends React.Component {
  static propTypes = {
    showModal: PropTypes.bool.isRequired,
    course: PropTypes.object.isRequired,
    actions: PropTypes.shape({
      save: PropTypes.func.isRequired,
      close: PropTypes.func.isRequired,
    })
  };

  renderBody=()=>(
    <div>
      {this.props.course.description}
      </div>
  );

  render() {
    const { showModal, actions, course } = this.props;

    return (
      <Modal
        show={showModal}
        onHide={actions.close}
        id={'modal-info'}
      >
        <Modal.Header>
          <Modal.Title id='ModalHeader'><span>
            {course.title}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body className={"modal-body"}>
          {this.renderBody()}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-default" onClick={actions.close}> Cancel </button>
          <button className="btn btn-success" onClick={actions.close}> Start course</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalCourse;