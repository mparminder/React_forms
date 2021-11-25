import React, { Component } from "react";
import _ from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagecount = Math.ceil(itemsCount / pageSize);
  return pagecount !== 1 ? (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {_.range(1, pagecount + 1).map((ele) => {
          return (
            <li
              key={ele}
              className={ele === currentPage ? "page-item active" : "page-item"}
            >
              <a className="page-link" onClick={() => onPageChange(ele)}>
                {ele}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  ) : null;
};

export default Pagination;
