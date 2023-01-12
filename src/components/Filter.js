import React, { useEffect, useState } from "react";

const Filter = ({ data, setFilteredData }) => {
  const [newFilter, setNewFilter] = useState("");

  // * Filtering Logic and Updates the data to show.
  let filterDataEffect = () => {
    const dataToShow =
      newFilter.length === 0
        ? data
        : data.filter(
            (singleProduct) =>
              singleProduct.product_name
                .toLowerCase()
                .includes(newFilter.toLowerCase()) ||
              singleProduct.category_name
                .toLowerCase()
                .includes(newFilter.toLowerCase())
          );

    setFilteredData(dataToShow);
  };

  useEffect(filterDataEffect, [newFilter, data, setFilteredData]);

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value);
  };

  return (
    <input
      className="bg-gray-200 border-gray-200 border-2 focus:outline-none focus:bg-white focus:border-emerald-400 rounded px-6 py-2"
      placeholder="Search"
      onChange={handleFilterChange}
    />
  );
};

export default Filter;
