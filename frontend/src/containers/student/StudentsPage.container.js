import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import StudentsPageActions from '../../actions/students-page';
import StudentsPage from '../../components/student/StudentsPage';


function mapStateToProps(state) {
    return state.studentsPage
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(StudentsPageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage)
