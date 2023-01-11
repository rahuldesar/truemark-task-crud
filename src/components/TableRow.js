const TableRow = ({ rowData: item }) => {
  return (
    <tr class="border border-slate-500">
      <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.product_name}
      </td>
      <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.category_name}
      </td>
      <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.description}
      </td>
      <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.created_at.substring(0, 10)}
      </td>
      <td class="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {item.status}
      </td>
      <td>
        <button class="bg-green-500 px-3 py-2 mr-5 rounded-md"> Edit </button>
        <button class="bg-red-400 px-3 py-2 rounded-md"> Delete </button>
      </td>
    </tr>
  );
};

export default TableRow;
