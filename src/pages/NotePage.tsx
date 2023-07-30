
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const NotePage: React.FC = () => {
  const initialNote = useSelector((state: RootState) => state.notes.notes[0])
  const summary = useSelector((state: RootState) => state.notes.summary)
  const categories = Object.keys(summary)
  const inputNames = Object.keys(initialNote)
  return <div>Note</div>
}
export default NotePage;