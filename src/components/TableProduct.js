import React from "react";
import TableRow from "./TableRow";

const TableProduct = ({ data, updateData, dataToShow }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full px-10">
        <thead className="border border-slate-500">
          <tr>
            <th
              scope="col"
              className="text-md font-medium text-gray-900 px-6 py-4 text-left"
            >
              Name
            </th>
            <th
              scope="col"
              className="text-md font-medium text-gray-900 px-6 py-4 text-left"
            >
              Category
            </th>
            <th
              scope="col"
              className="text-md font-medium text-gray-900 px-6 py-4 text-left"
            >
              Description
            </th>
            <th
              scope="col"
              className="text-md font-medium text-gray-900 px-6 py-4 text-left"
            >
              Created At
            </th>
            <th
              scope="col"
              className="text-md font-medium text-gray-900 px-6 py-4 text-left"
            >
              Status
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataToShow.map((item) => (
            <TableRow
              key={item.id}
              rowData={item}
              data={data}
              updateData={updateData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableProduct;
