import { useSelector } from "react-redux"
import Table from "../components/table/Table"
import { RootState } from "../redux/store"
import editIcon from '../assets/edit_icon.png'
import archiveIcon from '../assets/archive_icon.png'
import trashCanIcon from '../assets/trash-icon.png'
import unarchivedIcon from '../assets/unarchive_icon.png'
import Button from "../components/Button"
import { useState } from "react"

const Dashboard = () => {
  const notes = useSelector((state: RootState) => state.notes.notes)
  const archivedNotes = useSelector((state: RootState) => state.notes.archivedNotes)
  const summary = useSelector((state: RootState) => state.notes.summary)
  const notesIcons = [editIcon, archiveIcon, trashCanIcon]
  const unarchivedIcons =[unarchivedIcon]
  const [isArchivedNotesTable, setIsArchivedNotesTable] = useState<boolean>(false)
  

  const clickHandler = ()=> {
    setIsArchivedNotesTable(!isArchivedNotesTable);
  }

  return (
    <div>
      {isArchivedNotesTable ? (<>
        <Table data={archivedNotes} icons={unarchivedIcons} />
        <Button onClick={clickHandler} children="Back To Notes" /></>
        ):
        (<><Table data={notes} icons={notesIcons} />
        <Button onClick={clickHandler} children="Archived Notes" />
        <Button onClick={clickHandler} children="Add new note" /></>)
      }
        <Table data={summary} />
    </div>
  )
}
export default Dashboard
