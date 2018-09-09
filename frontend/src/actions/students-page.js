export const FETCH_DATA = 'STUDENTS_PAGE/FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'STUDENTS_PAGE/FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'STUDENTS_PAGE/FETCH_DATA_FAILURE';
export const GET_STUDENT_SUCCESS = 'STUDENTS_PAGE/GET_STUDENT_SUCCESS';
export const GET_STUDENT_FAILURE = 'STUDENTS_PAGE/GET_STUDENT_FAILURE';
export const CHANGE_FIRST_NAME = 'STUDENTS_PAGE/CHANGE_FIRST_NAME';
export const CHANGE_LAST_NAME = 'STUDENTS_PAGE/CHANGE_LAST_NAME';
export const CHANGE_EMAIL = 'STUDENTS_PAGE/CHANGE_EMAIL';
export const CHANGE_PHONE_NUMBER = 'STUDENTS_PAGE/CHANGE_PHONE_NUMBER';
export const CHANGE_ID_NUMBER = 'STUDENTS_PAGE/CHANGE_ID_NUMBER';
export const CHANGE_FILE = 'STUDENTS_PAGE/CHANGE_FILE';

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

function save() {
  return async (dispatch, getState, api) => {
    try {
      const { firstName, lastName, email, idNumber, phoneNumber, student, file } = getState().studentsPage;
      const { course } = getState().coursesPage;
      const payload = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        id_number: idNumber,
        phone_number: phoneNumber,
        student_id: student.id,
        file: file,
        course_id: course.id
      };

      const response = await api.updateStudent(payload);
      const data = JSON.parse(response);
      dispatch({type: GET_STUDENT_SUCCESS, data})
    } catch (e) {
      dispatch({type: GET_STUDENT_FAILURE, e})
    }
  }
}

function changeFirstName(firstName) {
  return {type: CHANGE_FIRST_NAME, firstName}
}

function changeLastName(lastName) {
  return {type: CHANGE_LAST_NAME, lastName}
}

function changeEmail(email) {
  return {type: CHANGE_EMAIL, email}
}

function changePhoneNumber(number) {
  return {type: CHANGE_PHONE_NUMBER, number}
}

function changeIdNumber(number) {
  return {type: CHANGE_ID_NUMBER, number}
}


function changeImage(file) {
  return {type: CHANGE_FILE, file}
}


export default {
  fetchStudents,
  getStudentDetails,
  changeFirstName,
  changeLastName,
  changeEmail,
  changePhoneNumber,
  changeIdNumber,
  changeImage,
  save
}