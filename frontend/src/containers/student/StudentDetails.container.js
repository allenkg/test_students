import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import StudentsPageActions from '../../actions/students-page';
import CoursesPageActions from '../../actions/courses-page';
import StudentDetails from '../../components/student/StudentDetails';


function mapStateToProps(state, ownProps) {
  return {
    ...state.studentsPage,
    ...state.coursesPage,
    studentId: ownProps.routeParams.studentId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      ...StudentsPageActions,
      ...CoursesPageActions
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)