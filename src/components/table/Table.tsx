import React from "react";
import { TableProps } from "../../types/TableProps";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import styles from './Table.module.css'
 

const Table: React.FC<TableProps> = ({ data, icons, archived}) => {
  return (
    <table className={styles.table}>
      <TableHead data={data}/>
      {data.length !== 0 ? <TableBody data={data} icons={icons} archived={archived}/> : "This is not any notes"} 
    </table>
  )
}
export default Table;
