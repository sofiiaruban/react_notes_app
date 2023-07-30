import { TableProps } from "../types/TableProps";

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table>
      {JSON.stringify(data)}
      <thead></thead>
      <tbody></tbody>
    </table>
  )
}
export default Table;
