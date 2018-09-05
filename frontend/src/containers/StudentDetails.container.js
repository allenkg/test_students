import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import StudentsPageActions from '../actions/students-page';
import StudentDetails from '../components/StudentDetails';


function mapStateToProps(state, ownProps) {
    return {
      ...state.studentsPage,
      studentId: ownProps.query.params.studentId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(StudentsPageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)