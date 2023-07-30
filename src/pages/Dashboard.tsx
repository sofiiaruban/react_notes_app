import { useSelector } from "react-redux"
import Table from "../components/Table"
import { RootState } from "../redux/store"

const Dashboard = () => {
  const notes = useSelector((state: RootState) => state.notes.notes)
  return <div> <Table notesData={notes}/></div>
}
export default Dashboard
