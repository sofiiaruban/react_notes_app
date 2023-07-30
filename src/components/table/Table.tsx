import React from "react";
import { TableProps } from "../../types/TableProps";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
 

const Table: React.FC<TableProps> = ({ data, icons}) => {
  return (
    <table>
      <TableHead data={data} icons={icons} />
      <TableBody data={data} icons={icons} />
    </table>
  )
}
export default Table;
