import React from 'react';
import PropTypes from 'prop-types';
import {STYLEFORLINK} from "../constants";
import {UIDropdownMenu, UIDropdownMenuItem} from "./UIDropdownMenu";
import ReactTooltip from 'react-tooltip';
import CourseUsersTable from "./CourseUsersTable";
import { browserHistory } from 'react-router';


class CourseDetails extends React.Component {
  static propTypes = {
    courseId: PropTypes.string.isRequired,
    students: PropTypes.array.isRequired,
    course: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      getCourseDetails: PropTypes.func.isRequired,
      removeStudentFromCourse: PropTypes.func.isRequired
    })
  };

  componentDidMount() {
    this.props.actions.getCourseDetails(this.props.courseId);
    this.props.actions.fetchCourseStudents(this.props.courseId);
  }

  wrapCellContentWithTip = (cell, row) => {
    return <div data-tip={cell} data-event='mouseenter' data-event-off='mouseout click'>
      <div style={{zIndex: -1, overflow: 'hidden', textOverflow: 'ellipsis'}}>{cell}<ReactTooltip/></div>
      {this.actionsFormat(cell, row, '', '', STYLEFORLINK)}</div>;
  };

  editStudent = (id) => {
     browserHistory.push(`/students/${id}`);
  };
  removeStudent = (studentId) => {
    this.props.actions.removeStudentFromCourse(this.props.courseId, studentId);
  };

  actionsFormat = (cell, row, caret, btn, style) => {
    return <UIDropdownMenu caretClassName={caret} btnClassName={btn} styleForLink={style}>
      <UIDropdownMenuItem disabled={false}
                          onClick={() => this.editStudent(row.id)}>Student details
      </UIDropdownMenuItem>
      <UIDropdownMenuItem disabled={false}
                          onClick={() => this.removeStudent(row.id)}>Remove from course
      </UIDropdownMenuItem>
    </UIDropdownMenu>;
  };

  studentTitleFormat = (cell, row) => {
    return this.wrapCellContentWithTip(cell, row);
  };

  columns = () => [
    {
      name: 'first_name',
      hasSort: true,
      title: 'First Name',
      className: 'allow-overflow',
      tdStyle: {position: 'relative'},
      width: '30%',
      localized: true,
      format: (cell, row) => this.studentTitleFormat(cell, row)
    },
    {
      name: 'last_name',
      hasSort: true,
      title: 'Last Name',
      className: 'allow-overflow',
      tdStyle: {position: 'relative'},
      width: '30%',
      localized: true,
      format: (cell, row) => this.studentTitleFormat(cell, row)
    },
    {
      name: 'email',
      hasSort: true,
      title: 'Email',
      className: 'allow-overflow',
      tdStyle: {position: 'relative'},
      width: '30%',
      localized: true,
      format: (cell, row) => this.studentTitleFormat(cell, row)
    },
  ];

  render() {
    const {course, isLoading, students, courseId} = this.props;

    if (!course && isLoading) {
      return (<div>Loading...</div>)
    }

    return (
      <div>
        <h4>{course.title}</h4>
        <p>{course.description}</p>
        <div className="mt-lg-4 mb">
          <h5>{course.title} students </h5>
          <CourseUsersTable
            students={students}
            keyField="id"
            onReload={() => this.props.actions.fetchCourseStudents(courseId)}
            columns={this.columns()}
          />
        </div>

      </div>
    );
  }
}

export default CourseDetails;