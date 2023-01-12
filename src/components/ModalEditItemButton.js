import { useState } from "react";
import productService from "../services/product";

const ModalEditItemButton = ({ data, updateData, item }) => {
  const [showModal, setShowModal] = useState(false);
  const [itemName, setItemName] = useState(item.product_name);
  const [itemCategory, setItemCategory] = useState(item.category_name);
  const [itemDescription, setItemDescription] = useState(item.description);
  const [itemStatus, setItemStatus] = useState(item.status);

  // function handleEdit(e) {
  //   e.preventDefault();

  // let newData = data.map((singleData) => {
  //   if (singleData.id === item.id) {
  //     return {
  //       ...singleData,
  //       product_name: itemName,
  //       category_name: itemCategory,
  //       description: itemDescription,
  //       status: itemStatus,
  //     };
  //   } else {
  //     return singleData;
  //   }
  // });

  // updateData(newData);
  //   setShowModal(false);
  // }

  let updateProduct = (id) => {
    const productToUpdate = data.find((product) => product.id === item.id);
    console.log(productToUpdate);
    const newProductData = {
      product_name: itemName,
      category_name: itemCategory,
      description: itemDescription,
      status: itemStatus,
    };
    console.log(newProductData);
    // * Update on Server
    productService
      .update(productToUpdate.id, newProductData)
      .then((response) => {
        console.log(response.data);
        console.log(`${response.data.product_name} added`);
        newProductData.id = response.data.id;
        newProductData.created_at = response.data.created_at;
      });

    // * Update Data locally . (to reduce amount of api calls + faster).
    let newData = data.map((singleData) => {
      if (singleData.id === item.id) {
        return {
          ...singleData,
          product_name: itemName,
          category_name: itemCategory,
          description: itemDescription,
          status: itemStatus,
        };
      } else {
        return singleData;
      }
    });

    updateData(newData);

    setShowModal(false);
  };

  // let deleteData = (id) => {
  //   updateData(data.filter((product) => product.id !== item.id));
  // };

  function resetProduct() {
    setItemName(item.product_name);
    setItemCategory(item.category_name);
    setItemDescription(item.description);
    setItemStatus(item.status);
  }

  return (
    <div>
      <button
        className="bg-emerald-400 shadow hover:shadow-lg active:bg-emerald-500 active:text-white px-3 py-2 mr-5 rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <div>
          <div className="justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto mx-auto min-w-fit">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="p-4 border-b border-solid border-slate-200 ">
                  <h3 className="text-center md:text-left text-2xl font-medium">
                    Edit a product
                  </h3>
                </div>

                <form onSubmit={updateProduct}>
                  <div className="md:flex md:items-center my-3 mx-3">
                    <div className="md:w-1/3">
                      <label>Name</label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-300"
                        type="text"
                        value={itemName}
                        placeholder="Name of Product"
                        onChange={(e) => setItemName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="md:flex md:items-center my-3 mx-3">
                    <div className="md:w-1/3">
                      <label>Description</label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-300"
                        type="text"
                        placeholder="Description of Product"
                        value={itemDescription}
                        onChange={(e) => setItemDescription(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="md:flex md:items-center my-3 mx-3">
                    <div className="md:w-1/3">
                      <label>Category</label>
                    </div>
                    <div className="md:w-2/3">
                      {/* <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-300"
                        type="text"
                        value={itemCategory}
                        placeholder="Category of Product"
                        onChange={(e) => setItemCategory(e.target.value)}
                      /> */}
                      <select
                        className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 disabled:text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-emerald-300"
                        value={itemCategory}
                        onChange={(e) => setItemCategory(e.target.value)}
                      >
                        <option className="text-gray-400" value="" hidden>
                          Product Category
                        </option>
                        <option value="electronic">Electronic</option>
                        <option value="furniture">Furniture</option>
                        <option value="dairy">Dairy</option>
                      </select>
                    </div>
                  </div>
                  <div className="md:flex md:items-center my-3 mx-3">
                    <div className="md:w-1/3">
                      <label>Status</label>
                    </div>
                    <div className="md:w-2/3">
                      <select
                        className="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 disabled:text-gray-400 leading-tight focus:outline-none focus:bg-white focus:border-emerald-300"
                        value={itemStatus}
                        onChange={(e) => setItemStatus(e.target.value)}
                      >
                        <option className="text-gray-400" value="" hidden>
                          Inventory Status
                        </option>
                        <option value="in_stock">In Stock</option>
                        <option value="limited_available">
                          Limited Available
                        </option>
                        <option value="out_of_stock">Out of Stock</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-2 items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-red-400 focus:bg-red-500  focus:text-white font-bold uppercase px-6 py-3 md:mr-3 text-sm rounded shadow-none hover:shadow-xl"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                      }}
                    >
                      Close
                    </button>
                    <button
                      className="bg-blue-400 focus:bg-blue-500  focus:text-white font-bold uppercase px-6 py-3 md:mr-3 text-sm rounded shadow-none hover:shadow-xl"
                      type="button"
                      onClick={() => {
                        resetProduct();
                      }}
                    >
                      Reset
                    </button>
                    <button
                      className="bg-emerald-500 focus:bg-emerald-600 focus:text-white font-bold uppercase text-sm px-6 py-3  rounded shadow-none hover:shadow-xl"
                      type="submit"
                    >
                      Edit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </div>
  );
};

export default ModalEditItemButton;
