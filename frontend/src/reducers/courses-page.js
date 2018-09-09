import merge from 'xtend';
import createReducer from './create-reducer';

import {
  FETCH_COURSES,
  FETCH_COURSE_DETAILS_SUCCESS,
  FETCH_COURSE_DETAILS_FAILURE,
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_SUCCESS, SHOW_MODAL, HIDE_MODAL, CHANGE_TITLE, CHANGE_DESCRIPTION, CHANGE_COURSE_IMAGE, MODAL_SHOW,
  MODAL_HIDE
} from "../actions/courses-page";

const INITIAL_STATE = {
  courses: [],
  isLoading: false,
  errors: {},
  course: {},
  showModal: false,
  title: '',
  description: '',
  img: null,
  createCourseModalVisible: false
};

export default createReducer({
  [FETCH_COURSES]: (state) => merge(state, {isLoading: true}),
  [FETCH_COURSES_SUCCESS]: (state, action) => merge(state, {
    courses: action.data,
    isLoading: false
  }),
  [FETCH_COURSES_FAILURE]: (state, action) => merge(state, {
    isLoading: false,
    errors: action.e
  }),
  [SHOW_MODAL]: (state, action) => merge(state, {
    course: action.course,
    showModal: true
  }),
  [HIDE_MODAL]: (state, action) => merge(state, {
    course: {},
    showModal: false
  }),
  [CHANGE_TITLE]: (state, action) => merge(state, {
    title: action.title
  }),
  [CHANGE_DESCRIPTION]: (state, action) => merge(state, {
    description: action.description
  }),
  [CHANGE_COURSE_IMAGE]: (state, action) => merge(state, {
    img: action.file
  }),
  [MODAL_SHOW]: (state, action) => merge(state, {
    createCourseModalVisible: true
  }),
  [MODAL_HIDE]: (state, action) => merge(state, {
    createCourseModalVisible: false
  })
}, INITIAL_STATE)