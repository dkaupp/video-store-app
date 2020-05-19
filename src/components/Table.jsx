import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = () => {
  return (
    <div>
      <table className="table">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
};

export default Table;
