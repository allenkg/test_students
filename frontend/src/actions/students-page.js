export const FETCH_DATA = 'STUDENTS_PAGE/FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'STUDENTS_PAGE/FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'STUDENTS_PAGE/FETCH_DATA_FAILURE';


function fetchStudents() {
  return async (dispatch, getState, api) => {
    dispatch({type: FETCH_DATA});
    try {
      const response = await api.getStudents();
      const data = JSON.parse(response);
      dispatch({type: FETCH_DATA_SUCCESS, data});
    } catch (e) {
      dispatch({type: FETCH_DATA_FAILURE, e})
    }
  }
}


export default {
  fetchStudents
}