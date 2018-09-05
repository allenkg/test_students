import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import mainPage from './main-page';
import studentsPage from './students-page';
import coursesPage from './courses-page';

export default combineReducers({
  routing,
  mainPage,
  coursesPage,
  studentsPage
})