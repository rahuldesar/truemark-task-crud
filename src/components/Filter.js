import React, { useState } from "react";

const Filter = ({ data, setFilteredData }) => {
  const [newFilter, setNewFilter] = useState("");
  console.log(newFilter);

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

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value);
    setFilteredData(dataToShow);
  };

  return (
    <div>
      filter shown with:
      <input onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
