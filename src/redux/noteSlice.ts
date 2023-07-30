import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Note } from '../types/note'


const initialNotes:Note[] = [
  {
    name: 'Shopping List',
    created: '7/26/2023',
    category: 'Task',
    content: 'eggs, pasta, butter,salt',
    dates: ['7/26/2023']
  },
  {
    name: 'Thought',
    created: '7/26/2023',
    category: 'Random Thought',
    content: 'donec pretium vulputate',
    dates: ['7/26/2023']
  },
  {
    name: 'Bagfix',
    created: '7/26/2023',
    category: 'Idea',
    content: 'tincidunt ornare massa eget',
    dates: ['7/26/2023', '7/28/2023']
  },
  {
    name: 'Shopping List',
    created: '7/26/2023',
    category: 'Task',
    content: 'tincidunt ornare massa eget',
    dates: ['7/29/2023']
  },
  {
    name: 'Ornare Lectus',
    created: '7/26/2023',
    category: 'Random Thought',
    content: 'pellentesque massa placerat duis',
    dates: ['7/26/2023']
  },
  {
    name: 'Rhoncus Mattis',
    created: '7/26/2023',
    category: 'Idea',
    content: 'magna etiam tempor orci',
    dates: ['7/26/2023']
  }
]
const initialArchivedNotes: Note[] = []

export const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: initialNotes,
    archivedNotes: initialArchivedNotes
  },
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload)
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (index >= 0 && index < state.notes.length) {
        state.notes.splice(index, 1)
      }
    },
    editNote: (
      state,
      action: PayloadAction<{ index: number; updatedNote: Note }>
    ) => {
      const { index, updatedNote } = action.payload
      if (index >= 0 && index < state.notes.length) {
        state.notes[index] = updatedNote
      }
    },
    archiveNote: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (index >= 0 && index < state.notes.length) {
        const archivedNote = state.notes.splice(index, 1)[0]
        state.archivedNotes.push(archivedNote)
      }
    },
    unarchiveNote: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (index >= 0 && index < state.archivedNotes.length) {
        const unarchivedNote = state.archivedNotes.splice(index, 1)[0]
        state.notes.push(unarchivedNote)
      }
    }
  }
})
export const { addNote, deleteNote, editNote, archiveNote, unarchiveNote } =
  noteSlice.actions
export default noteSlice.reducer
