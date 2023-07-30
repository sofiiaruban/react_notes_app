import React from "react";
import { TableProps } from "../types/TableProps";

const Table: React.FC<TableProps> = ({ data }) => {
  const archivedNotesTableHeadNames = ["Category", "Active", "Archived"]
  const getTableHeadNames = () => {
    let headNames
    
    if (Array.isArray(data)) {
      headNames = Object.keys(data[0])
    } else {
      headNames = archivedNotesTableHeadNames
    }

    return headNames
  } 
  let tableHeadNames = getTableHeadNames();

  return (
    <table>
      <thead>
        <tr>
          {tableHeadNames.map((name) => (
            <td>{name}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.isArray(data) ? (
          data.map((note, index) => (
            <tr key={index}>
              {Object.values(note).map((value) => (
                <td>{value}</td>
              ))}
            </tr>
          ))
        ) : (
          <>
            {Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value[0]}</td>
                <td>{value[1]}</td>
              </tr>
            ))}
          </>
        )}
      </tbody>
    </table>
  )
}
export default Table;
