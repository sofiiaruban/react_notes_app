import { TableProps } from "../types/TableProps";

const Table: React.FC<TableProps> = ({ data }) => {
  
  const getTableHeadNames = () => {
    let tableHeadNames

    if (Array.isArray(data)) {
      tableHeadNames = Object.keys(data[0])
    } else {
      tableHeadNames = Object.keys(data)
    }
    
    return tableHeadNames
  } 

  return (
    <table>
      <thead>{JSON.stringify(getTableHeadNames())}</thead>
      <tbody></tbody>
    </table>
  )
}
export default Table;
