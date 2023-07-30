import { TableProps } from '../../types/TableProps'
import Icons from '../Icons'
import styles from './TebleHead.module.css'
import editIcon from '../../assets/edit_icon.png'
import archiveIcon from '../../assets/archive_icon.png'
import trashCanIcon from '../../assets/trash-icon.png' 


const TableHead: React.FC<TableProps> = ({data}) => {
  const archivedNotesTableHeadNames = ['Category', 'Active', 'Archived']
  const notesIcons = [editIcon, archiveIcon, trashCanIcon]

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
        {Array.isArray(data) ? <Icons icons={notesIcons} /> : null}
      </tr>
    </thead>
  )
}
export default TableHead
