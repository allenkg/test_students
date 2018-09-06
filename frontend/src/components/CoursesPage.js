import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

class CoursesPage extends React.Component {
  static propTypes = {
    courses: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
      fetchCourses: PropTypes.func.isRequired
    })
  };

  componentDidMount() {
    this.props.actions.fetchCourses();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.courses !== this.props.courses
  }

  render() {
    const {courses, isLoading} = this.props;

    if (isLoading) {
      return (<div>isLoading....</div>)
    }
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Courses</h1>
          <p className="lead">Quickly build an effective pricing table for your potential customers with this Bootstrap
            example. It's built with default Bootstrap components and utilities with little customization.</p>
        </div>

        <div className="card-deck mb-3 text-center">
          {courses.map((course, index) =>
            <div className="card" style={{width: "18rem"}} key={index}>
              <p className="text-center mt-2">
                <img className="card-img-top" src={'/asdj'} alt="Card image cap" style={{width: "40%"}}/>
              </p>
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text" style={{fontSize: "1.5vw"}}>{course.description}</p>
                <Link href={`/courses/${course.id}`} className="btn btn-primary" style={{fontSize: "1vw"}}>See course Students</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default CoursesPage;