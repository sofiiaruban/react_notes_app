import { TableProps } from '../../types/TableProps'

const TableHead: React.FC<TableProps> = ({data}) => {
  const archivedNotesTableHeadNames = ['Category', 'Active', 'Archived']
  const getTableHeadNames = () => {
    let headNames

    if (Array.isArray(data)) {
      headNames = Object.keys(data[0])
    } else {
      headNames = archivedNotesTableHeadNames
    }

    return headNames
  }
  let tableHeadNames = getTableHeadNames()
  return (
    <thead>
      <tr>
        {tableHeadNames.map((name) => (
          <td>{name}</td>
        ))}
      </tr>
    </thead>
  )
}
export default TableHead
