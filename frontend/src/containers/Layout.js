import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import MainPageActions from '../actions/main-page';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import React from 'react';
import CoursesPageActions from "../actions/courses-page";
import StudentsPageActions from "../actions/students-page";
import CreateCourseModal from "./CreateCourseModal.container";
import CreateStudentModal from "./CreateStudentModal.container";

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    actions: PropTypes.shape({
      createCourseModalShow: PropTypes.func.isRequired,
      createStudentModalShow: PropTypes.func.isRequired,
      inputSearchQuery: PropTypes.func.isRequired
    })
  };

  changeSearchQuery=(e)=> this.props.actions.inputSearchQuery(e.target.value);

  createStudentClick=()=> this.props.actions.createStudentModalShow();

  createCourseClick=()=> this.props.actions.createCourseModalShow();

  render() {
    return (
      <div>
        <div
          className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal"><Link to='/'>Test task</Link></h5>
          <Link className="p-2 text-dark" to="/courses"> Courses </Link>
          <Link className="p-2 text-dark" to="/students"> Students </Link>
          <nav className="my-2 my-md-0 mr-md-3">
            <input type="text" className="form-control" placeholder="Search..." onChange={this.changeSearchQuery}/>
          </nav>
          <a className="btn btn-outline-primary mr-1" href="#" onClick={this.createStudentClick}>Add student</a>
          <a className="btn btn-outline-primary" href="#" onClick={this.createCourseClick}>Add course</a>
        </div>
        <div className="container">
          {this.props.children}
        </div>
        <CreateCourseModal/>
        <CreateStudentModal/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.mainPage
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...MainPageActions,
      ...CoursesPageActions,
      ...StudentsPageActions
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)