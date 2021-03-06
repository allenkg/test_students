import React from 'react';
import PropTypes from 'prop-types';
import {STYLEFORLINK} from "../../constants";
import {UIDropdownMenu, UIDropdownMenuItem} from "./UIDropdownMenu";
import ReactTooltip from 'react-tooltip';
import CourseUsersTable from "./CourseUsersTable";
import {browserHistory} from 'react-router';


class CourseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
  }

  static propTypes = {
    courseId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    students: PropTypes.array.isRequired,
    course: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      getCourseDetails: PropTypes.func.isRequired,
      editCourse: PropTypes.func.isRequired,
      changeTitle: PropTypes.func.isRequired,
      changeDescription: PropTypes.func.isRequired,
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

  editClickHandler = () => {
    this.setState({editable: true})
  };

  changeTitleHandler = (e) => {
    this.props.actions.changeTitle(e.target.value)
  };

  changeDescriptionHandler = (e) => {
    this.props.actions.changeDescription(e.target.value)
  };

  save = () => this.props.actions.editCourse(this.props.courseId);

  render() {
    const {course, isLoading, students, courseId, title, description} = this.props;

    if (!course && isLoading) {
      return (<div>Loading...</div>)
    }

    return (
      <div>
        <div className="col-md-12 col-xs-12 text-center mb-3">
          {!this.state.editable ?
            <h3>{title}</h3> :
            <input type="text" value={title} onChange={this.changeTitleHandler}/>
          }
        </div>

        <div className="row mt-4">
          {!this.state.editable ? <div className="col-md-10">
              <p>{description}</p>
            </div> :
            <input type="text" onChange={this.changeDescriptionHandler} value={description}/>
          }
          <div className="col-md-2 text-right">
            {!this.state.editable ?
              <button className="btn btn-primary btn-block" onClick={this.editClickHandler}>Edit</button> :
              <button className="btn btn-primary btn-block" onClick={this.save}>Save</button>
            }
          </div>
        </div>

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