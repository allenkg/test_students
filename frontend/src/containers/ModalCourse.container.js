import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CoursesPageActions from '../actions/courses-page';
import ModalCourse from "../components/ModalCourse";


function mapStateToProps(state) {
    return state.coursesPage
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CoursesPageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCourse)