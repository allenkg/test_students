import React from 'react';
import PropTypes from 'prop-types';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class CourseUsersTable extends React.Component {

  static propTypes = {
    students: PropTypes.array.isRequired,
    error: PropTypes.string,
    noDataText: PropTypes.string,
    onReload: PropTypes.func.isRequired,
    columns: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    keyField: PropTypes.string
  };

  onReload = (e) => {
    e.preventDefault();
    this.props.onReload();
  };

  tableControls = props => <a href="#" onClick={(e) => this.onReload(e)} className="btn btn-success">
    <span className="fa fa-refresh"/>
  </a>;

  tableOptions = () => {
    return {
      page: 1,
      sizePerPageList: [
        {text: '5', value: 5},
        {text: '10', value: 10},
        {text: '25', value: 25},
        {text: '50', value: 50},
        {text: 'all', value: this.props.students.length}
      ],
      sizePerPage: 15,
      pageStartIndex: 1,
      paginationSize: 5,
      prePage: '<',
      firstPage: '<<',
      nextPage: '>',
      lastPage: '>>',
      paginationPosition: 'top',
      noDataText: this.props.noDataText || "no data",
      btnGroup: this.tableControls,
    }
  };

  colProps = (col, index) => {
    let colProps = {
      key: `${col.title}_${index}`,
      isKey: !!col.isKey,
      width: col.width,
      searchable: !col.noSearch,
      dataSort: col.hasSort,
    };
    if (col.name)
      colProps.dataField = col.name;
    if (col.format) {
      colProps.dataFormat = col.format;
    }
    if (col.width) colProps.width = col.width;
    if (col.className) colProps.columnClassName = col.className;
    if (col.tdStyle) colProps.tdStyle = col.tdStyle;
    return colProps;
  };

  render() {
    return (
      <div>
        {this.props.error && <div className="alert alert-danger">{this.props.error}</div>}
        <BootstrapTable data={this.props.students}
                        striped hover pagination
                        options={this.tableOptions()}
                        keyField={this.props.keyField}
                        className="allow-overflow">
          {this.props.columns.map((col, index) => {
            return <TableHeaderColumn {...this.colProps(col, index)}>{col.title}</TableHeaderColumn>
          })}
        </BootstrapTable>
      </div>
    );
  }
}

export default CourseUsersTable;
