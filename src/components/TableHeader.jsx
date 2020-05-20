import React, { useContext } from "react";
import MoviesContext from "../context/MoviesContext";

const TableHeader = ({ columns }) => {
  const { sortColumn, setSortColumn } = useContext(MoviesContext);

  const handleSort = (path) => {
    path === sortColumn.path
      ? setSortColumn({
          path,
          order: sortColumn.order === "asc" ? "desc" : "asc",
        })
      : setSortColumn({ path: path, order: "asc" });
  };

  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;
    return sortColumn.order === "asc" ? (
      <i className="fas fa-caret-up"></i>
    ) : (
      <i className="fas fa-caret-down"></i>
    );
  };
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            className="clickable"
            key={column.path || column.key}
            onClick={() => handleSort(column.path)}
            scope="col"
          >
            {column.label} {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
