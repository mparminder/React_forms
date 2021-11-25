import React, { useState } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import Pagination from "./../components/Pagination";
import Paginate from "./../components/Pagenate";
import _ from "lodash";
import Filter from "./../components/Filter";
import { fetchUsers } from "../redux";
import { connect } from "react-redux";

class Product extends React.Component {
  state = {
    persons: [],
    pageSize: 5,
    currentPage: 1,
    filter: 0,
  };

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchUsers();
  }
  handlePageChange = (Page) => {
    this.setState({ currentPage: Page });
  };

  handleFilter = (evt) => {
    this.setState({ filter: evt.target.value });
  };

  render() {
    const emp = Filter(
      this.props.userData.users,
      "employee_age",
      this.state.filter
    );
    const employees = Paginate(
      emp,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <>
        {this.props.userData.loading ? (
          <h2>Loading</h2>
        ) : this.props.error ? (
          <h2>{this.props.userData.error}</h2>
        ) : (
          console.log(this.props.userData)
        )}
        {this.props.userData.length > 0
          ? this.props.userData.map((ele) => {
              return <h3>{ele.name}</h3>;
            })
          : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.employee.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
