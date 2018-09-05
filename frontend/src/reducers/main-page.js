import merge from 'xtend';
import createReducer from './create-reducer';
import {
    FETCH_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions/main-page';

const INITIAL_STATE = {
    students: []
};

export default createReducer({
    [FETCH_DATA_SUCCESS]: (state, action) => merge(state, {
        students: action.data
    })
}, INITIAL_STATE)