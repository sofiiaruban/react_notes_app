import { TableProps } from '../../types/TableProps'
import Icons from '../Icons'
import styles from './TableHead.module.css'


const TableHead: React.FC<TableProps> = ({data, icons}) => {
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
    <thead className={styles.thead}>
      <tr>
        {tableHeadNames.map((name) => (
          <td className={styles.td}>{name}</td>
        ))}
        {Array.isArray(data) ? <Icons icons={icons} /> : null}
      </tr>
    </thead>
  )
}
export default TableHead
