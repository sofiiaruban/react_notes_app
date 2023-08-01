import { TableProps } from '../../types/TableProps'
import Icons from '../Icons'
import { v4 as uuidv4 } from 'uuid'
import {useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { archiveNote, deleteNote, unarchiveNote } from '../../redux/noteSlice'

const TableBody: React.FC<TableProps> = ({data, icons, archived}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleEditIconClick = (noteId: string) => {
    navigate(`/note/${noteId}`)
  }
  const handleArchiveIconClick = (noteId: string) => {
    dispatch(archiveNote(noteId))
  }
  const handleDeleteIconClick = (noteId: string) => {
    dispatch(deleteNote(noteId))
  }
  const handleUnarchivedIconClick = (noteId: string) => {
    dispatch(unarchiveNote(noteId))
  }

  return (
    <tbody>
      {Array.isArray(data) ? (
        data.map((note) => (
          <tr key={note.id}>
            {Object.entries(note).map(([key, value]) => {
              if (key === 'id') return null
                return (
                  <td key={uuidv4()}>
                    {key === 'dates' ? value.join(', ') : value}
                  </td>
                )
            })}
            <Icons
              icons={icons}
              click={
                archived
                  ? [()=>handleUnarchivedIconClick(note.id!)]
                  : [
                      () => handleEditIconClick(note.id!),
                      () => handleArchiveIconClick(note.id!),
                      () => handleDeleteIconClick(note.id!)
                    ]
              }
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
