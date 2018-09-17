import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import CoursesPageActions from '../../actions/courses-page';
import CourseDetails from '../../components/course/CourseDetails';
import StudentsPageActions from "../../actions/students-page";


function mapStateToProps(state, ownProps) {
  return {
    ...state.mainPage,
    ...state.coursesPage,
    students: state.studentsPage.students,
    courseId: ownProps.params.courseId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...CoursesPageActions,
      ...StudentsPageActions
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails)