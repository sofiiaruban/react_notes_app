import { TableProps } from '../../types/TableProps'
import Icons from '../Icons'
import { v4 as uuidv4 } from 'uuid'
import {useNavigate } from 'react-router-dom'

const TableBody: React.FC<TableProps> = ({data, icons}) => {
  const navigate=useNavigate();

  const handleEditIconClick = (noteId: string) => {
    console.log("Clicked on Edit icon in row with note ID:", noteId);
    navigate(`/note/${noteId}`)
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
            {Object.entries(note).map(([key, value]) => {
              if (key !== 'id') {
                return <td key={uuidv4()}>{value}</td>
              }
              return null
            })}
            <Icons
              icons={icons}
              click={[
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
