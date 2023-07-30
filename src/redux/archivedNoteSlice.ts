
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Note } from '../types/note'

const archivedNotes: Note[] = [
]
export const archivedNoteSlice = createSlice({
  name: 'archivedNote',
  initialState: archivedNotes,
  reducers: {
    addNoteToArchive: (state, action: PayloadAction<Note>) => {
      state.push(action.payload)
    },
    unarchiveNote: (state, action: PayloadAction<number>) => {
      const index = action.payload
      if (index >= 0 && index < state.length) {
        state.splice(index, 1)
      }
    }
  }
})
export const { addNote, deleteNote } = noteSlice.actions

export default noteSlice.reducer
