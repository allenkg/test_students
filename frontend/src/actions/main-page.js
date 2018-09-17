import {push} from "react-router-redux";

export const FETCH_DATA = 'MAIN_PAGE/FETCH_DATA';
export const FETCH_DATA_STUDENT_SUCCESS = 'MAIN_PAGE/FETCH_DATA_STUDENT_SUCCESS';
export const FETCH_DATA_COURSE_SUCCESS = 'MAIN_PAGE/FETCH_DATA_COURSE_SUCCESS';
export const FETCH_DATA_FAILURE = 'MAIN_PAGE/FETCH_DATA_FAILURE';
export const INPUT_SEARCH_QUERY = 'MAIN_PAGE/INPUT_SEARCH_QUERY';
export const SET_INITIAL_STATE = 'MAIN_PAGE/SET_INITIAL_STATE';

let searchTimeOut = null;

function inputSearchQuery(searchQuery) {
  clearTimeout(searchTimeOut);
  return (dispatch) => {
    dispatch({type: INPUT_SEARCH_QUERY, searchQuery});
    searchTimeOut = setTimeout(() => {
      dispatch(searchStudent());
      dispatch(searchCourse());
      clearTimeout(searchTimeOut);
    }, 1000)
  }
}

function searchStudent() {
  return async (dispatch, getState, api) => {
    dispatch({type: FETCH_DATA});
    try {
      const {searchQuery} = getState().mainPage;
      const response = await api.searchStudent(searchQuery);
      const data = JSON.parse(response);
      dispatch({type: FETCH_DATA_STUDENT_SUCCESS, data});
      dispatch(push('/'));
    } catch (e) {
      dispatch({type: FETCH_DATA_FAILURE, e})
    }
  }
}

function searchCourse() {
  return async (dispatch, getState, api) => {
    dispatch({type: FETCH_DATA});
    try {
      const {searchQuery} = getState().mainPage;
      const response = await api.searchCourse(searchQuery);
      const data = JSON.parse(response);
      dispatch({type: FETCH_DATA_COURSE_SUCCESS, data});
      dispatch(push('/'));
    } catch (e) {
      dispatch({type: FETCH_DATA_FAILURE, e})
    }

  }
}

function setInitialState() {
  return { type: SET_INITIAL_STATE }
}

export default { inputSearchQuery, setInitialState }