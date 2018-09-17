import React from 'react';
import PropTypes from 'prop-types';
import CoursesItem from "./CoursesItem";
import ReactPaginate from 'react-paginate';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: props.offset
    }
  }

  static propTypes = {
    courses: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    actions: PropTypes.shape({
      fetchCourses: PropTypes.func.isRequired,
      setInitialState: PropTypes.func.isRequired,
    })
  };

  changePage = (data) => {
    if (this.props.currentPage !== data.selected && this.props.offset) {
      const pageNumber = data.selected + 1;
      this.props.actions.fetchCourses(this.state.offset, pageNumber)
    }
  };

  componentDidMount() {
    let firstPage = 1;
    const offset = this.props.offset ? this.props.offset : 5;
    this.props.actions.fetchCourses(offset, firstPage);
  }

  offsetChangeHandler = (e) => {
    e.preventDefault();
    this.setState({offset: e.target.value});
    this.props.actions.fetchCourses(e.target.value, this.props.currentPage)
  };

  render() {
    const totalPages = this.props.totalPages / this.props.offset;
    const {courses, isLoading} = this.props;

    if (isLoading) {
      return (<div>isLoading....</div>)
    }
    return (
      <div>
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Courses</h1>
        </div>
        <div className="pagination">
          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={4}
            previousLabel={'previous'}
            nextLabel={'next'}
            nextClassName={'page-link'}
            previousClassName={'page-link'}
            breakClassName={"break-me"}
            breakLabel={<a href="">...</a>}
            onPageChange={this.changePage}
            initialPage={this.props.currentPage}
            containerClassName={"pagination"}
            pageClassName={'page-link'}
            activeClassName={"active"}
          />
          <select name="pagination" id="pagination" className="page-link" onChange={this.offsetChangeHandler}
                  value={this.props.offset}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
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