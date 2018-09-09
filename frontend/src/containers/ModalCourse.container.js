import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CoursesPageActions from '../actions/courses-page';
import ModalCourse from "../components/ModalCourse";
import StudentsPageActions from "../actions/students-page";


function mapStateToProps(state) {
    return state.coursesPage
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
          ...CoursesPageActions,
          ...StudentsPageActions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCourse)