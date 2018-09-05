import merge from 'xtend';
import createReducer from './create-reducer';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions/students-page';

const INITIAL_STATE = {
  students: [],
  isLoading: false,
  errors: {}
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
  })
}, INITIAL_STATE)