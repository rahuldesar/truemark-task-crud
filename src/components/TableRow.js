const TableRow = ({ rowData: item }) => {
  return (
    <tr class="border border-slate-500">
      <td>{item.product_name}</td>
      <td>{item.category_name}</td>
      <td>{item.description}</td>
      <td>{item.created_at}</td>
      <td>{item.status}</td>
    </tr>
  );
};

export default TableRow;
