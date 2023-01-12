import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import ModalAddItemButton from "./components/ModalAddItemButton";
import TableProduct from "./components/TableProduct";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    let baseUrl = "https://product-fhqo.onrender.com/products";

    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
        setIsLoading(false);

        console.log("useEffect:- API read successfully. ✅");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataToShow = filteredData === null ? data : filteredData;

  if (isLoading) {
    return <div> WAIT DATA IS LOADING .. </div>;
  } else {
    return (
      <div className="md:container mx-auto mb-5 font-rubik">
        <div className="text-2xl my-3"> Task : CRUD Operation </div>

        <div className="flex flex-col md:flex-row justify-between mb-3">
          <div>
            <ModalAddItemButton data={data} updateData={setData} />
          </div>
          <div>
            <Filter data={data} setFilteredData={setFilteredData} />
          </div>
        </div>
        <TableProduct data={dataToShow} updateData={setData} />
      </div>
    );
  }
};

export default App;
