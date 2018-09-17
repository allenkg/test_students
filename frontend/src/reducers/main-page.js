import merge from 'xtend';
import createReducer from './create-reducer';
import {
  FETCH_DATA,
  FETCH_DATA_STUDENT_SUCCESS,
  FETCH_DATA_COURSE_SUCCESS,
  FETCH_DATA_FAILURE,
  INPUT_SEARCH_QUERY, SET_INITIAL_STATE
} from '../actions/main-page';

const INITIAL_STATE = {
  courses: [],
  students: [],
  searchQuery: '',
  hasSearchResult: false,
  errors: {}
};

export default createReducer({
  [FETCH_DATA]: (state) => merge(state, {isLoading: true}),
  [FETCH_DATA_STUDENT_SUCCESS]: (state, action) => merge(state, {
    students: action.data,
    isLoading: false,
    hasSearchResult: true
  }),
  [FETCH_DATA_COURSE_SUCCESS]: (state, action) => merge(state, {
    courses: action.data,
    isLoading: false,
    hasSearchResult: true
  }),
  [FETCH_DATA_FAILURE]: (state, action) => merge(state, {
    isLoading: false,
    errors: action.e
  }),
  [INPUT_SEARCH_QUERY]: (state, action) => merge(state, {
    searchQuery: action.searchQuery
  }),
  [SET_INITIAL_STATE]: (state) => merge(state, INITIAL_STATE)
}, INITIAL_STATE)