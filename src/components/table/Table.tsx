import React from "react";
import { TableProps } from "../../types/TableProps";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
 

const Table: React.FC<TableProps> = ({ data, icons}) => {
  return (
    <table>
      <TableHead data={data} icons={icons} />
      {data.length !== 0 ? <TableBody data={data} icons={icons} /> : "This is not any notes"} 
    </table>
  )
}
export default Table;
