import React from "react";

import _ from "lodash";

const TableBody = ({ data, columns }) => {
  const renderCell = (item, column) =>
    column.content ? column.content(item) : _.get(item, column.path);

  const createId = (item, column) => item._id + (column.path || column.key);
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {columns.map((column) => (
            <td key={createId(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
