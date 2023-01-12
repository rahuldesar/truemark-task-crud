import ModalEditItemButton from "./ModalEditItemButton";

const TableRow = ({ rowData: item, data, updateData }) => {
  function handleDelete() {
    updateData(data.filter((product) => product.id !== item.id));
  }

  return (
    <tr className="border border-slate-500">
      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.product_name}
      </td>
      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.category_name}
      </td>
      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.description}
      </td>
      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.created_at.substring(0, 10)}
      </td>
      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.status}
      </td>
      <td className="px-3 py-4 flex">
        <ModalEditItemButton item={item} data={data} updateData={updateData} />
        <button
          className="bg-red-400 active:bg-red-500 active:text-white shadow hover:shadow-lg px-3 py-2 rounded-md"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
