import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import MainPageActions from '../actions/main-page';
import CourseDetails from '../components/CourseDetails';


function mapStateToProps(state) {
    return state.mainPage
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(MainPageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails)