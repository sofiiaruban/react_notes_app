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
  initialState: initialNotes,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload)
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (index >= 0 && index < state.length) {
        state.splice(index, 1)
      }
    }
  }
})
export const { addNote,deleteNote} = noteSlice.actions

export default noteSlice.reducer
