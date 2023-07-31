import { useSelector } from 'react-redux'
import { TableProps } from '../../types/TableProps'
import styles from './TableHead.module.css'
import { RootState } from '../../redux/store'


const TableHead: React.FC<TableProps> = ({data}) => {
  const archivedNotesTableHeadNames = ['Category', 'Active', 'Archived']
  const notes = useSelector((state: RootState) => state.notes.notes)

  const getTableHeadNames = () => {
    let headNames
    if (Array.isArray(data)) {
      headNames = Object.keys(data[0] || notes[0])
        if (headNames.includes('id')) {
          headNames = headNames.filter((name) => name !== 'id')
        }
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
          <td key={name} className={styles.td}>
            {name}
          </td>
        ))}
      </tr>
    </thead>
  )
}
export default TableHead
