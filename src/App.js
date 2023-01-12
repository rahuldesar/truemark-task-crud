import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import ModalAddItemButton from "./components/ModalAddItemButton";
import TableProduct from "./components/TableProduct";
import productService from "./services/product";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    productService.getAll().then((response) => {
      setData(response.data.products);
      setIsLoading(false);

      console.log("useEffect:- API read successfully. ✅");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataToShow = filteredData === null ? data : filteredData;

  if (isLoading) {
    return <div> Fetching Data ... </div>;
  } else {
    return (
      <div className="sm:container mx-auto mb-5 font-rubik">
        <div className="text-2xl pb-2 my-3 text-center border-b-2">
          {" "}
          Task : CRUD Operation{" "}
        </div>

        <div className="flex gap-3 px-5 xl:px-2 items-center flex-col md:flex-row justify-between mb-3">
          <div>
            <ModalAddItemButton data={data} updateData={setData} />
          </div>
          <div>
            <Filter data={data} setFilteredData={setFilteredData} />
          </div>
        </div>
        <TableProduct
          data={data}
          dataToShow={dataToShow}
          updateData={setData}
        />
      </div>
    );
  }
};

export default App;
