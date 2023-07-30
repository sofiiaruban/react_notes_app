
//import { useSelector } from 'react-redux'
//import { RootState } from '../redux/store'
//import TextInput from '../components/form/TextInput'
import { useState } from 'react'

const NotePage: React.FC = () => {
  //const initialNote = useSelector((state: RootState) => state.notes.notes[0])
  //const summary = useSelector((state: RootState) => state.notes.summary)
  //const categories = Object.keys(summary)
  //const inputNames = Object.keys(initialNote)
  const [name, setName] = useState('')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  return (
    <form>
      <input type="text" name="ffgf" placeholder="{placeholder}" value="{value}" />
    </form>
  )
}
export default NotePage;