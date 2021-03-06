import {push} from "react-router-redux";

export const FETCH_COURSES = 'COURSE_PAGE/FETCH_COURSES';
export const FETCH_COURSES_SUCCESS = 'COURSE_PAGE/FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'COURSE_PAGE/FETCH_COURSES_FAILURE';
export const FETCH_COURSE_DETAILS_SUCCESS = 'COURSE_PAGE/FETCH_COURSE_DETAILS_SUCCESS';
export const FETCH_COURSE_DETAILS_FAILURE = 'COURSE_PAGE/FETCH_COURSE_DETAILS_FAILURE';

export const SHOW_MODAL = 'COURSE_PAGE/SHOW_MODAL';
export const HIDE_MODAL = 'COURSE_PAGE/HIDE_MODAL';

export const CREATE_COURSE = 'COURSE_PAGE/CREATE_COURSE';
export const CREATE_COURSE_SUCCESS = 'COURSE_PAGE/CREATE_COURSE_SUCCESS';
export const CREATE_COURSE_FAILURE = 'COURSE_PAGE/CREATE_COURSE_FAILURE';
export const CHANGE_TITLE = 'COURSE_PAGE/CHANGE_TITLE';
export const CHANGE_DESCRIPTION = 'COURSE_PAGE/CHANGE_DESCRIPTION';
export const CHANGE_COURSE_IMAGE = 'COURSE_PAGE/CHANGE_COURSE_IMAGE';

export const MODAL_SHOW = 'COURSE_PAGE/MODAL_SHOW';
export const MODAL_HIDE = 'COURSE_PAGE/MODAL_Hide';

export const FETCH_COURSE_STUDENTS = 'COURSE_PAGE/FETCH_COURSE_STUDENTS';
export const FETCH_COURSE_STUDENTS_SUCCESS = 'COURSE_PAGE/FETCH_COURSE_STUDENTS_SUCCESS';
export const FETCH_COURSE_STUDENTS_FAILURE = 'COURSE_PAGE/FETCH_COURSE_STUDENTS_FAILURE';

export const REMOVE_STUDENT_FROM_COURSE = 'COURSE_PAGE/REMOVE_STUDENT_FROM_COURSE';
export const REMOVE_STUDENT_FROM_COURSE_SUCCESS = 'COURSE_PAGE/REMOVE_STUDENT_FROM_COURSE_SUCCESS';
export const REMOVE_STUDENT_FROM_COURSE_FAILURE = 'COURSE_PAGE/REMOVE_STUDENT_FROM_COURSE_FAILURE';

export const SET_INITIAL_STATE = 'COURSE_PAGE/SET_INITIAL_STATE';

export const EDIT_COURSE = 'COURSE_PAGE/EDIT_COURSE';
export const EDIT_COURSE_SUCCESS = 'COURSE_PAGE/EDIT_COURSE_SUCCESS';
export const EDIT_COURSE_FAILURE = 'COURSE_PAGE/EDIT_COURSE_FAILURE';

function createCourseModalShow() {
  return {type: MODAL_SHOW}
}

function createCourseModalHide() {
  return {type: MODAL_HIDE}
}

function changeTitle(title) {
  return {type: CHANGE_TITLE, title}
}

function changeDescription(description) {
  return {type: CHANGE_DESCRIPTION, description}
}

function changeCourseImage(file) {
  return {type: CHANGE_COURSE_IMAGE, file}
}

function createCourse() {
  return async (dispatch, getState, api) => {
    dispatch({type: CREATE_COURSE});
    try {
      const {title, description, img} = getState().coursesPage;
      const payload = {
        title: title,
        description: description,
        img: img
      };
      const response = await api.createCourse(payload);
      const data = JSON.stringify(response);
      dispatch({type: CREATE_COURSE_SUCCESS, data});
      dispatch(push('/courses'));
      dispatch(fetchCourses());
    } catch (e) {
      dispatch({type: CREATE_COURSE_FAILURE, e});
    }
  }
}

function fetchCourses(offset, pageNumber) {
  return async (dispatch, getState, api) => {
    dispatch({type: FETCH_COURSES});
    try {
      const response = await api.getCourses(offset, pageNumber);
      let data = JSON.parse(response);
      dispatch({type: FETCH_COURSES_SUCCESS, data, pageNumber });
    } catch (e) {
      dispatch({type: FETCH_COURSES_FAILURE, e})
    }
  }
}

function getCourseDetails(courseId) {
  return async (dispatch, getState, api) => {
    dispatch({type: FETCH_COURSES});
    try {
      const response = await api.getCourse(courseId);
      const data = JSON.parse(response);
      dispatch({type: FETCH_COURSE_DETAILS_SUCCESS, data})
    } catch (e) {
      dispatch({type: FETCH_COURSE_DETAILS_FAILURE, e})
    }
  }
}

function showCourseDetails(course) {
  return {type: SHOW_MODAL, course}
}

function close() {
  return {type: HIDE_MODAL}
}

function fetchCourseStudents(courseId) {
  return async (dispatch, getState, api) => {
    dispatch({type: FETCH_COURSE_STUDENTS });
    try {
      const response = await api.getCourseStudents(courseId);
      const data = JSON.parse(response);
      dispatch({type: FETCH_COURSE_STUDENTS_SUCCESS, data})
    } catch (e) {
      dispatch({type: FETCH_COURSE_STUDENTS_FAILURE, e})
    }
  }
}

function removeStudentFromCourse(courseId, studentId) {
  return async (dispatch, getState, api) => {
    dispatch({type: REMOVE_STUDENT_FROM_COURSE });
    try {
      const response = await api.removeStudent(courseId, studentId);
      const data = JSON.parse(response);
      dispatch({type: REMOVE_STUDENT_FROM_COURSE_SUCCESS });
      dispatch(fetchCourseStudents(courseId));
    } catch (e) {
      dispatch({type: REMOVE_STUDENT_FROM_COURSE_FAILURE, e})
    }
  }
}

function editCourse(courseId) {
  return async (dispatch, getState, api) => {
    dispatch({type: EDIT_COURSE});
    try {
      const { title, description } = getState().coursesPage;
      const payload = {
        title: title,
        description: description,
        course_id: courseId
      };
      const response = await api.updateCourse(payload);
      const data = JSON.parse(response);
      dispatch({type: EDIT_COURSE_SUCCESS, data })

    } catch (e) {
      dispatch({type: EDIT_COURSE_FAILURE, e})
    }
  }
}

function setInitialState() {
  return { type: SET_INITIAL_STATE }
}

export default {
  fetchCourses,
  getCourseDetails,
  showCourseDetails,
  close,
  changeTitle,
  changeDescription,
  changeCourseImage,
  createCourse,
  createCourseModalShow,
  createCourseModalHide,
  fetchCourseStudents,
  removeStudentFromCourse,
  setInitialState,
  editCourse
}