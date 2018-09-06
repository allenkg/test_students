export const FETCH_DATA = 'STUDENTS_PAGE/FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'STUDENTS_PAGE/FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'STUDENTS_PAGE/FETCH_DATA_FAILURE';
export const GET_STUDENT_SUCCESS = 'STUDENTS_PAGE/GET_STUDENT_SUCCESS';
export const GET_STUDENT_FAILURE = 'STUDENTS_PAGE/GET_STUDENT_FAILURE';


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

function getStudentDetails(studentId) {
  return async (dispatch, getSate, api) => {
    dispatch({type: FETCH_DATA});
    try {
      const response = await api.getStudent(studentId);
      const data = JSON.parse(response);
      dispatch({type: GET_STUDENT_SUCCESS, data})
    } catch (e) {
      dispatch({type: GET_STUDENT_FAILURE, e})
    }
  }
}


export default {
  fetchStudents,
  getStudentDetails
}