import merge from 'xtend';
import createReducer from './create-reducer';

import {
  FETCH_COURSES,
  FETCH_COURSE_DETAILS_SUCCESS,
  FETCH_COURSE_DETAILS_FAILURE,
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_SUCCESS, SHOW_MODAL, HIDE_MODAL, CHANGE_TITLE, CHANGE_DESCRIPTION, CHANGE_COURSE_IMAGE, MODAL_SHOW,
  MODAL_HIDE, FETCH_COURSE_STUDENTS_SUCCESS, SET_INITIAL_STATE
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
  createCourseModalVisible: false,
  totalPages: 0,
  currentPage: 1,
  offset: 5
};

export default createReducer({
  [FETCH_COURSES]: (state) => merge(state, {isLoading: true}),
  [FETCH_COURSES_SUCCESS]: (state, action) => merge(state, {
    courses: action.data.data,
    totalPages: action.data.allPages,
    currentPage: parseInt(action.pageNumber) - 1,
    offset: parseInt(action.data.offset),
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
  }),
  [FETCH_COURSE_DETAILS_SUCCESS]: (state, action) => merge(state, {
    isLoading: false,
    course: action.data
  }),
  [FETCH_COURSE_DETAILS_FAILURE]: (state, action) => merge(state, {
    isLoading: false,
    errors: action.e
  }),
  [FETCH_COURSE_STUDENTS_SUCCESS]: (state, action) => merge(state, {
    isLoading: false
  }),
  [SET_INITIAL_STATE]: (state) => merge(state, INITIAL_STATE)
}, INITIAL_STATE)