const TableRow = ({ rowData: item, data, updateData }) => {
  function handleEdit() {
    console.log(item);
  }

  function handleDelete() {
    updateData(data.filter((product) => product.id !== item.id));
  }

  return (
    <tr className="border border-slate-500">
      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.product_name}
      </td>
      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.category_name}
      </td>
      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.description}
      </td>
      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.created_at.substring(0, 10)}
      </td>
      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.status}
      </td>
      <td>
        <button
          className="bg-green-500 px-3 py-2 mr-5 rounded-md"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="bg-red-400 px-3 py-2 rounded-md"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
