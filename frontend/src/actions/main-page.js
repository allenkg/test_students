export const FETCH_DATA = '@@MAIN_PAGE/FETCH_DATA';
export const FETCH_DATA_SUCCESS = '@@MAIN_PAGE/FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = '@@MAIN_PAGE/FETCH_DATA_FAILURE';


export function fetchData() {
    return async (dispatch) => {
        dispatch({ type: FETCH_DATA });
        try {
            const response = await fetch('/api/test', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            const data = await response.json();
            dispatch({ type: FETCH_DATA_SUCCESS, data });
        } catch (e) {
            dispatch({ type: FETCH_DATA_FAILURE })
        }
    }
}