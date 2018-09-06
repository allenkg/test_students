import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CoursesPageActions from '../actions/courses-page';
import CoursesPage from '../components/CoursesPage';


function mapStateToProps(state) {
    return state.coursesPage
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(CoursesPageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)