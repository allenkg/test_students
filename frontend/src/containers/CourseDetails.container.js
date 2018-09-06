import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import CoursesPageActions from '../actions/courses-page';
import CourseDetails from '../components/CourseDetails';


function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  return {
    ...state.mainPage,
    courseId: ownProps.params.courseId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CoursesPageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails)