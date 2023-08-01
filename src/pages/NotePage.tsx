import { useDispatch, useSelector } from 'react-redux'
import { addNote, editNote } from '../redux/noteSlice'
import { Note } from '../types/Note'
import {  useEffect, useState } from 'react'
import Button from '../components/Button'
import style from './NotePage.module.css'
import closeIcon from '../assets/close_icon.png'
import { Link, useNavigate, useParams} from 'react-router-dom'
import { NotePageProps } from '../types/NotePageProps'
import { RootState } from '../redux/store'

const findNoteById = (notes: Note[], noteId: string) => {
  const foundNote = notes.find((note) => note.id === noteId)
  return foundNote || null
}

const NotePage: React.FC<NotePageProps> = ({editMode}) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<Note>({
     name: '',
     created: '',
     category: '',
     content: '',
     dates: [],
   })
  const navigate = useNavigate()
  const {id} = useParams()
  const notes = useSelector((state: RootState) => state.notes.notes)

  useEffect(() => {
    if (editMode && id) {
      const note = findNoteById(notes,id)
      if (note) {
        setFormData(note)
      }
    }
  }, [editMode, id])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    if (name === "dates") {
       const datesArray = value.split(',').map((date) => date.trim())
       setFormData((prevState) => ({
         ...prevState,
         [name]: datesArray
       }))
    } else {
       setFormData((prevState) => ({
         ...prevState,
         [name]: value
       }))
    }
    
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (editMode && id) {
      dispatch(editNote({ id, updatedNote: formData }))
    } else {
      dispatch(addNote(formData))
    }
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className={style.table}>
      <input
        type="text"
        onChange={handleChange}
        name="name"
        placeholder="Enter name"
        value={formData.name || ''}
        required={true}
      />
      <input
        type="text"
        onChange={handleChange}
        name="created"
        placeholder="Enter created date"
        value={formData.created || ''}
        required={true}
      />
      <div className={style.inputRadio}>
        <div className={style.inputRadioRow}>
          <input
            onChange={handleChange}
            type="radio"
            name="category"
            value="Task"
            id="task"
            checked={formData.category == 'Task'}
          />
          <label htmlFor="task">Task</label>
        </div>
        <div className={style.inputRadioRow}>
          <input
            type="radio"
            name="category"
            value="Random Thought"
            onChange={handleChange}
            id="randomThought"
            checked={formData.category == 'Random Thought'}
          />
          <label htmlFor="randomThought">Random Thought</label>
        </div>
        <div className={style.inputRadioRow}>
          <input
            type="radio"
            name="category"
            onChange={handleChange}
            value="Idea"
            id="idea"
            checked={formData.category == 'Idea'}
          />
          <label htmlFor="idea">Idea</label>
        </div>
      </div>
      <input
        type="text"
        onChange={handleChange}
        name="content"
        placeholder="Enter content"
        required={true}
        value={formData.content || ''}
      />
      <input
        type="text"
        onChange={handleChange}
        name="dates"
        placeholder="Enter dates"
        required={true}
        value={formData.dates.join(", ")|| []}
      />
      <Link to="/">
        <img className={style.closeIcon} src={closeIcon} alt="close" />
      </Link>
      <Button children={editMode ? 'Update Note' : 'Add Note'} />
    </form>
  )
}
export default NotePage;