import React from "react";
import { TableProps } from "../../types/TableProps";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table>
      <TableHead data={data}/>
      <TableBody data={data}/>
    </table>
  )
}
export default Table;
