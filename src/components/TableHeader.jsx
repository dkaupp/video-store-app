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

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.path || column.key}
            onClick={() => handleSort(column.path)}
            scope="col"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
