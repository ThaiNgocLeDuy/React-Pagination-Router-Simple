import React from "react";
import "./Pagination.css";

const Pagination = ({ pagination, itemPerPage, totalItem }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalItem / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className="page-navigation">
        {pageNumbers.length < totalItem
          ? pageNumbers.map((number) => (
              <li
                key={number}
                className="page-item"
                onClick={() => pagination(number)}
              >
                {number}
              </li>
            ))
          : totalItem}
      </ul>
    </div>
  );
};

export default Pagination;
