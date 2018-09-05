import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import MainPageActions from '../actions/main-page';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
// export default (props) => props.children;
import React from 'react';


class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div
          className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 className="my-0 mr-md-auto font-weight-normal"><Link to='/'>Test task</Link></h5>
          <Link className="p-2 text-dark" to="/courses"> Courses </Link>
          <Link className="p-2 text-dark" to="/students"> Students </Link>
          <nav className="my-2 my-md-0 mr-md-3">
            <input type="text" className="form-control" placeholder="Search..."/>
          </nav>
          <a className="btn btn-outline-primary mr-1" href="#">Add student</a>
          <a className="btn btn-outline-primary" href="#">Add course</a>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.mainPage
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(MainPageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)