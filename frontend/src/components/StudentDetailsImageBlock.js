import React from 'react';
import PropTypes from 'prop-types';
import studentAvatar from "../styles/images/studentAvatar.jpeg";

class StudentDetailsImageBlock extends React.Component {
  static propTypes = {
    student: PropTypes.object.isRequired,
    changeImage: PropTypes.func.isRequired

  };

  changeImageClickHandler=(e)=> {
    e.preventDefault();
    const file = e.target.files[0];
    this.props.changeImage(file)
  };

  render() {
    const { student } = this.props;
    const studentImage = student.img ? student.img : studentAvatar;

    return (
      <div className="col-lg-3">
        <div className="text-center">
          <img src={studentImage} className="avatar img-circle img-thumbnail"
               alt="avatar"/>
          <h6>Upload a different photo...</h6>
          <input type="file" className="text-center center-block file-upload" onChange={this.changeImageClickHandler}/>
        </div>
        <hr/>
        <br/>
      </div>
    );
  }
}

export default StudentDetailsImageBlock;