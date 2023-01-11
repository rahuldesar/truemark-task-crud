import React from "react";
import TableRow from "./TableRow";

const TableProduct = ({ data }) => {
  if (data.length === 0) {
    return <div> LOADING DATA.. PLEASE WAIT</div>;
  } else {
    return (
      <table class="border border-slate-500">
        <thead class="border border-slate-500">
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} rowData={item} />
          ))}
        </tbody>
      </table>
    );
  }
};

export default TableProduct;
