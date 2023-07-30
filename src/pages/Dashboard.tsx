import { useSelector } from "react-redux"
import Table from "../components/Table"
import { RootState } from "../redux/store"


const Dashboard = () => {
  const notes = useSelector((state: RootState) => state.notes.notes)
  const summary = useSelector((state: RootState) => state.notes.summary)
  return (
    <div>
      <Table data={notes} />
      <Table data={summary}/>
    </div>
  )
}
export default Dashboard
