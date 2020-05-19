import React, { useContext } from "react";
import _ from "lodash";
import MoviesContext from "../context/MoviesContext";

const Pagination = ({ currentPage, count, pageSize }) => {
  const { handlePageChange } = useContext(MoviesContext);
  const numbPages = Math.ceil(count / pageSize);

  if (numbPages === 1) return null;
  const pages = _.range(1, numbPages + 1);

  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="!#">
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              onClick={() => handlePageChange(page)}
              className="page-link"
              href="!#"
            >
              {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="!#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
