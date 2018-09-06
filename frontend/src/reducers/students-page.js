import merge from 'xtend';
import createReducer from './create-reducer';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE, GET_STUDENT_SUCCESS, GET_STUDENT_FAILURE
} from '../actions/students-page';

const INITIAL_STATE = {
  students: [],
  isLoading: false,
  errors: {},
  student: {}
};

export default createReducer({
  [FETCH_DATA]: (state) => merge(state, {isLoading: true}),
  [FETCH_DATA_SUCCESS]: (state, action) => merge(state, {
    students: action.data,
    isLoading: false
  }),
  [FETCH_DATA_FAILURE]: (state, action) => merge(state, {
    isLoading: false,
    errors: action.e
  }),
  [GET_STUDENT_SUCCESS]: (state, action) => merge(state, {
    student: action.data,
    isLoading: false
  }),
  [GET_STUDENT_FAILURE]: (state, action) => merge(state, {
    errors: action.e,
    isLoading: false
  })
}, INITIAL_STATE)