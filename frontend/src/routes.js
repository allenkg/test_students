import React from 'react';
import App from "./containers/App";
import Layout from "./containers/Layout";
import MainPage from "./containers/MainPage.container";
import CoursesPage from "./containers/course/CoursesPage.container";
import CourseDetails from "./containers/course/CourseDetails.container";
import StudentsPage from "./containers/student/StudentsPage.container";
import StudentDetails from "./containers/student/StudentDetails.container";
import { IndexRoute, Route } from "react-router";


export default (
  <Route component={App}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MainPage}/>
      <Route path='courses' component={CoursesPage}/>
      <Route path='courses/:courseId' component={CourseDetails}/>
      <Route path='students' component={StudentsPage}/>
      <Route path='students/:studentId' component={StudentDetails}/>
    </Route>
  </Route>
)