export const FETCH_DATA = '@@MAIN_PAGE/FETCH_DATA';
export const FETCH_DATA_SUCCESS = '@@MAIN_PAGE/FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = '@@MAIN_PAGE/FETCH_DATA_FAILURE';


function fetchData() {
  return async (dispatch, getState, api) => {
    dispatch({type: FETCH_DATA});
    try {
      console.log('response');
      const response = await api.fetchStudents();
      const data = JSON.parse(response);
      console.log(data);
      dispatch({type: FETCH_DATA_SUCCESS, data});
    } catch (e) {
      dispatch({type: FETCH_DATA_FAILURE, e})
    }
  }
}

export default {
  fetchData
}