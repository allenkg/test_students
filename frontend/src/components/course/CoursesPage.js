import React from 'react';
import PropTypes from 'prop-types';
import CoursesItem from "./CoursesItem";
import ReactPaginate from 'react-paginate';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 5
    }
  }

  static propTypes = {
    courses: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,

    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,


    actions: PropTypes.shape({
      fetchCourses: PropTypes.func.isRequired
    })
  };

  changePage = (data) => {
    if (this.props.currentPage !== data.selected) {
      const pageNumber = data.selected + 1;
      this.props.actions.fetchCourses(this.state.offset, pageNumber)
    }
  };

  componentDidMount() {
    let firstPage = 1;
    this.props.actions.fetchCourses(this.state.offset, firstPage);
  }

  render() {
    const totalPages = this.props.totalPages / this.state.offset;
    const {courses, isLoading} = this.props;

    if (isLoading) {
      return (<div>isLoading....</div>)
    }
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Courses</h1>
        </div>

        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={4}
          previousLabel={'previous'}
          nextLabel={'next'}
          breakClassName={"break-me"}
          breakLabel={<a href="">...</a>}
          onPageChange={this.changePage}
          initialPage={this.props.currentPage}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />

        <div className="card-deck mb-3 text-center ">
          {courses.map((course, index) =>
            <CoursesItem course={course} key={index}/>
          )}
        </div>
      </div>
    )
  }
}

export default CoursesPage;