export const FETCH_COURSES = 'COURSE_PAGE/FETCH_COURSES';
export const FETCH_COURSES_SUCCESS = 'COURSE_PAGE/FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'COURSE_PAGE/FETCH_COURSES_FAILURE';
export const FETCH_COURSE_DETAILS_SUCCESS = 'COURSE_PAGE/FETCH_COURSE_DETAILS_SUCCESS';
export const FETCH_COURSE_DETAILS_FAILURE = 'COURSE_PAGE/FETCH_COURSE_DETAILS_FAILURE';

export const SHOW_MODAL = 'COURSE_PAGE/SHOW_MODAL';
export const HIDE_MODAL = 'COURSE_PAGE/HIDE_MODAL';
export const CHANGE_COURSE = 'COURSE_PAGE/CHANGE_COURSE';
export const CHANGE_COURSE_SUCCESS = 'COURSE_PAGE/CHANGE_COURSE_SUCCESS';
export const CHANGE_COURSE_FAILURE = 'COURSE_PAGE/CHANGE_COURSE_FAILURE';

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

function showCourseDetails(course) {
  return { type: SHOW_MODAL, course}
}

function close() {
  return {type: HIDE_MODAL }
}


export default {
  fetchCourses,
  getCourseDetails,
  showCourseDetails,
  close
}