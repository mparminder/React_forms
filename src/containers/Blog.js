import React, { useState } from "react";
import { connect } from "react-redux";
import {
  incrementByOne,
  decrementByOne,
  incrementByFifteen,
  decrementByTen,
} from "../redux";

function Blog(props) {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <h1>Counter</h1>
      <div
        class="p-3 mb-2 bg-warning text-dark"
        style={{ width: "150px", margin: "auto", cursor: "pointer" }}
      >
        <strong>Counter </strong>
        <span class="badge badge-secondary">{props.ctr}</span>
      </div>
      <div className="mt-5">
        <div className="row">
          <div className="col-sm-3">
            <div
              class="p-3 mb-2 bg-dark text-white"
              style={{ width: "150px", margin: "auto", cursor: "pointer" }}
              onClick={() => {
                props.onIncrementCounter();
              }}
            >
              <strong>Increment </strong>
              <span class="badge badge-secondary">+1</span>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              class="p-3 mb-2 bg-info text-white"
              style={{ width: "150px", margin: "auto", cursor: "pointer" }}
              onClick={props.onDecrementCounter}
            >
              <strong>Decrement </strong>
              <span class="badge badge-secondary">-1</span>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              class="p-3 mb-2 bg-primary text-white"
              style={{ width: "150px", margin: "auto", cursor: "pointer" }}
              onClick={props.onDecrementByTen}
            >
              <strong>Subtract </strong>
              <span class="badge badge-secondary">-10</span>
            </div>
          </div>
          <div className="col-sm-3">
            <div
              class="p-3 mb-2 bg-success text-white"
              style={{ width: "150px", margin: "auto", cursor: "pointer" }}
              onClick={props.onIncrementByFifteen}
            >
              <strong>Add </strong>
              <span class="mr-auto badge badge-secondary">+15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    ctr: state.counter.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(incrementByOne()),
    onDecrementCounter: () => dispatch(decrementByOne()),
    onIncrementByFifteen: () => dispatch(incrementByFifteen()),
    onDecrementByTen: () => dispatch(decrementByTen()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
