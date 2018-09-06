export const FETCH_COURSES = 'COURSE_PAGE/FETCH_COURSES';
export const FETCH_COURSES_SUCCESS = 'COURSE_PAGE/FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'COURSE_PAGE/FETCH_COURSES_FAILURE';
export const FETCH_COURSE_DETAILS_SUCCESS = 'COURSE_PAGE/FETCH_COURSE_DETAILS_SUCCESS';
export const FETCH_COURSE_DETAILS_FAILURE = 'COURSE_PAGE/FETCH_COURSE_DETAILS_FAILURE';


function fetchCourses() {
  return async (dispatch, getState, api) => {
    dispatch({type: FETCH_COURSES});
    try {
      const response = await api.getCourses();
      const data = JSON.parse(response);
      dispatch({type: FETCH_COURSES_SUCCESS, data});
    } catch (e) {
      dispatch({type: FETCH_COURSES_FAILURE, e})
    }
  }
}

function getCourseDetails(courseId) {
  return async (dispatch, getState, api) => {
    dispatch({type: FETCH_COURSES});
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