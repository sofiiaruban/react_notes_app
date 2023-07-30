import { useSelector } from "react-redux"
import Table from "../components/table/Table"
import { RootState } from "../redux/store"
import editIcon from '../assets/edit_icon.png'
import archiveIcon from '../assets/archive_icon.png'
import trashCanIcon from '../assets/trash-icon.png'

const Dashboard = () => {
  const notes = useSelector((state: RootState) => state.notes.notes)
  const summary = useSelector((state: RootState) => state.notes.summary)
  const notesIcons = [editIcon, archiveIcon, trashCanIcon]
  return (
    <div>
      <Table data={notes} icons={notesIcons} />
      <Table data={summary} />
    </div>
  )
}
export default Dashboard
