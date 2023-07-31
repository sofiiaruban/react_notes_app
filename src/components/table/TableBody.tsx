import { TableProps } from '../../types/TableProps'
import Icons from '../Icons'
import { v4 as uuidv4 } from 'uuid'

const TableBody: React.FC<TableProps> = ({data, icons}) => {
  const handleEditIconClick = (noteId: string) => {
    console.log("Clicked on Edit icon in row with note ID:", noteId);
  }
  const handleArchiveIconClick = (noteId: string) => {
    console.log("Clicked on Archive icon in row with note ID:", noteId);
  }
  const handleDeleteIconClick = (noteId: string) => {
    console.log("Clicked on Delete icon in row with note ID:", noteId);
  }

  return (
    <tbody>
      {Array.isArray(data) ? (
        data.map((note) => (
          <tr key={note.id}>
            {Object.values(note).map((value) => (
              <td key={uuidv4()}>{value}</td>
            ))}
            <Icons
              icons={icons}
              click={ [
                () => handleEditIconClick(note.id!),
                () => handleArchiveIconClick(note.id!),
                () => handleDeleteIconClick(note.id!)
              ]}
            />
          </tr>
        ))
      ) : (
        <>
          {Object.entries(data).map(([key, value]) => (
            <tr key={uuidv4()}>
              <td>{key}</td>
              <td>{value[0]}</td>
              <td>{value[1]}</td>
            </tr>
          ))}
        </>
      )}
    </tbody>
  )
}
export default TableBody
