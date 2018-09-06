import merge from 'xtend';
import createReducer from './create-reducer';

import {
  FETCH_COURSES,
  FETCH_COURSE_DETAILS_SUCCESS,
  FETCH_COURSE_DETAILS_FAILURE,
  FETCH_COURSES_FAILURE,
  FETCH_COURSES_SUCCESS
} from "../actions/courses-page";

const INITIAL_STATE = {
  courses: [],
  isLoading: false,
  errors: {}
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
  })
}, INITIAL_STATE)