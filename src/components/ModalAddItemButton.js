import { useState } from "react";

const ModalAddItemButton = ({ data, updateData }) => {
  const [showModal, setShowModal] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemStatus, setItemStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let date = new Date();
    console.log();
    updateData([
      ...data,
      {
        id: newMaxID(data),
        product_name: itemName,
        category_name: itemCategory,
        description: itemDescription,
        status: itemStatus,
        created_at: date.toISOString(),
      },
    ]);
    setShowModal(false);
    resetModal();
  }

  function resetModal() {
    setItemName("");
    setItemCategory("");
    setItemDescription("");
    setItemStatus("");
  }

  function newMaxID(arr) {
    let max = -Infinity;
    arr.forEach((item) => {
      if (max < item.id) {
        max = item.id;
      }
    });
    return max + 1;
  }

  return (
    <div>
      <button
        className="bg-emerald-500 active:text-white active:bg-emerald-600 w-52 text-center md:text-left font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add a Product
      </button>
      {showModal ? (
        <div>
          <div className="justify-center items-center flex overflow-x-auto overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-auto mx-auto min-w-fit">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="p-4 border-b border-solid border-slate-200 ">
                  <h3 className="text-center md:text-left text-2xl font-medium">
                    Add a product
                  </h3>
                </div>

                <form onSubmit={handleSubmit}>
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
                      <label>Category</label>
                    </div>
                    <div className="md:w-2/3">
                      <input
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-300"
                        type="text"
                        value={itemCategory}
                        placeholder="Category of Product"
                        onChange={(e) => setItemCategory(e.target.value)}
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

                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-red-400 focus:bg-red-500  focus:text-white font-bold uppercase px-6 py-3 mr-3 text-sm rounded shadow-none hover:shadow-xl"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        resetModal();
                      }}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 focus:bg-emerald-600 focus:text-white font-bold uppercase text-sm px-6 py-3 rounded shadow-none hover:shadow-xl"
                      type="submit"
                    >
                      Add
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

export default ModalAddItemButton;
