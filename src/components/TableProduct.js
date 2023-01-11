import React from "react";
import TableRow from "./TableRow";

const TableProduct = ({ data }) => {
  if (data.length === 0) {
    return <div> LOADING DATA.. PLEASE WAIT</div>;
  } else {
    return (
      <table class="min-w-full">
        <thead class="border border-slate-500">
          <tr>
            <th
              scope="col"
              class="text-lg font-medium text-gray-900 px-6 py-4 text-left"
            >
              Name
            </th>
            <th
              scope="col"
              class="text-lg font-medium text-gray-900 px-6 py-4 text-left"
            >
              Category
            </th>
            <th
              scope="col"
              class="text-lg font-medium text-gray-900 px-6 py-4 text-left"
            >
              Description
            </th>
            <th
              scope="col"
              class="text-lg font-medium text-gray-900 px-6 py-4 text-left"
            >
              Created At
            </th>
            <th
              scope="col"
              class="text-lg font-medium text-gray-900 px-6 py-4 text-left"
            >
              Status
            </th>
            <th></th>
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
