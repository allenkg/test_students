import merge from 'xtend';
import createReducer from './create-reducer';
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE, GET_STUDENT_SUCCESS, GET_STUDENT_FAILURE, CHANGE_FIRST_NAME, CHANGE_LAST_NAME, CHANGE_EMAIL,
  CHANGE_PHONE_NUMBER, CHANGE_ID_NUMBER, CHANGE_FILE, MODAL_HIDE, MODAL_SHOW
} from '../actions/students-page';

const INITIAL_STATE = {
  students: [],
  isLoading: false,
  errors: {},
  student: {},
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  idNumber: '',
  img: '',
  course: null,
  file: null,
  createStudentModalVisible: false
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
    firstName: action.data.first_name,
    lastName: action.data.last_name,
    email: action.data.email,
    phoneNumber: action.data.phone_number,
    idNumber: action.data.id_number,
    isLoading: false
  }),
  [GET_STUDENT_FAILURE]: (state, action) => merge(state, {
    errors: action.e,
    isLoading: false
  }),
  [CHANGE_FIRST_NAME]: (state, action) => merge(state, {
    firstName: action.firstName
  }),
  [CHANGE_LAST_NAME]: (state, action) => merge(state, {
    lastName: action.lastName
  }),
  [CHANGE_EMAIL]: (state, action) => merge(state, {
    email: action.email
  }),
  [CHANGE_PHONE_NUMBER]: (state, action) => merge(state, {
    phoneNumber: action.number
  }),
  [CHANGE_ID_NUMBER]: (state, action) => merge(state, {
    idNumber: action.number
  }),
  [CHANGE_FILE]: (state, action) => merge(state, {
    file: action.file
  }),
  [MODAL_SHOW]: (state, action) => merge(state, {
    createStudentModalVisible: true
  }),
  [MODAL_HIDE]: (state, action) => merge(state, {
    createStudentModalVisible: false
  })
}, INITIAL_STATE)