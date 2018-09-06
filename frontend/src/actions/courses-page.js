export const FETCH_DATA = 'COURSE_PAGE/FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'COURSE_PAGE/FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'COURSE_PAGE/FETCH_DATA_FAILURE';
export const FETCH_COURSE_DETAILS_SUCCESS = 'COURSE_PAGE/FETCH_COURSE_DETAILS_SUCCESS';
export const FETCH_COURSE_DETAILS_FAILURE = 'COURSE_PAGE/FETCH_COURSE_DETAILS_FAILURE';


function fetchCourses() {
  return async (dispatch, getState, api) => {
    dispatch({type: FETCH_DATA});
    try {
      const response = await api.fetchCourses();
      const data = JSON.parse(response);
      dispatch({type: FETCH_DATA_SUCCESS, data});
    } catch (e) {
      dispatch({type: FETCH_DATA_FAILURE, e})
    }
  }
}

function getCourseDetails(courseId) {
  return async (dispatch, getState, api) => {
    dispatch({type: FETCH_DATA});
    try {
      const response = await api.getCourseDetails(courseId);
      const data = JSON.parse(response);
      dispatch({type: FETCH_COURSE_DETAILS_SUCCESS, data})
    } catch (e) {
      dispatch({type: FETCH_COURSE_DETAILS_FAILURE, e})
    }
  }
}

export default {
  fetchCourses,
  getCourseDetails
}