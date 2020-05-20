import React, { useContext } from "react";
import _ from "lodash";
import MoviesContext from "../context/MoviesContext";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, count, pageSize }) => {
  const { setCurrentPage } = useContext(MoviesContext);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const numbPages = Math.ceil(count / pageSize);

  if (numbPages === 1) return null;
  const pages = _.range(1, numbPages + 1);

  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <Link className="page-link" to="!#">
            Previous
          </Link>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <Link
              onClick={() => handlePageChange(page)}
              className="page-link"
              to="!#"
            >
              {page}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link className="page-link" to="!#">
            Next
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
