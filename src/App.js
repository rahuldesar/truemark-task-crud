import { useState, useEffect } from "react";
import ModalAddItemButton from "./components/ModalAddItemButton";
import TableProduct from "./components/TableProduct";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let baseUrl = "https://product-fhqo.onrender.com/products";

    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);

  if (isLoading) {
    return <div> WAIT DATA IS LOADING .. </div>;
  } else {
    return (
      <div className="container mx-auto mb-5 font-rubik">
        <div className="text-2xl my-3"> Task : CRUD Operation </div>
        <ModalAddItemButton data={data} updateData={setData} />
        <TableProduct data={data} updateData={setData} />
      </div>
    );
  }
};

export default App;
