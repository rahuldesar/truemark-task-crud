import { useState, useEffect } from "react";
import TableProduct from "./components/TableProduct";

const App = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    let baseUrl = "https://product-fhqo.onrender.com/products";

    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data.products);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);

  return (
    <div className="items-center">
      <h2> Task 2 : CRUD Operation </h2>
      <div></div>

      <TableProduct data={data} />
    </div>
  );
};

export default App;
