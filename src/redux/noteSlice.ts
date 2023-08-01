import { createSlice, createAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Note } from '../types/Note'
import { Summary } from '../types/Summary'
import { v4 as uuidv4 } from 'uuid'


const initialNotes: Note[] = [
  {
    id: uuidv4(),
    name: 'Shopping List',
    created: '7/26/2023',
    category: 'Task',
    content: 'eggs, pasta, butter,salt',
    dates: ['7/26/2023']
  },
  {
    id: uuidv4(),
    name: 'Thought',
    created: '7/26/2023',
    category: 'Random Thought',
    content: 'donec pretium vulputate',
    dates: ['7/26/2023']
  },
  {
    id: uuidv4(),
    name: 'Bagfix',
    created: '7/26/2023',
    category: 'Idea',
    content: 'tincidunt ornare massa eget',
    dates: ['7/26/2023', '7/28/2023']
  },
  {
    id: uuidv4(),
    name: 'Shopping List',
    created: '7/26/2023',
    category: 'Task',
    content: 'tincidunt ornare massa eget',
    dates: ['7/29/2023']
  },
  {
    id: uuidv4(),
    name: 'Ornare Lectus',
    created: '7/26/2023',
    category: 'Random Thought',
    content: 'pellentesque massa placerat duis',
    dates: ['7/26/2023']
  },
  {id: uuidv4(),
    name: 'Rhoncus Mattis',
    created: '7/26/2023',
    category: 'Idea',
    content: 'magna etiam tempor orci',
    dates: ['7/26/2023']
  }
]
const initialArchivedNotes: Note[] = [

]

export const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: initialNotes,
    archivedNotes: initialArchivedNotes,
    summary: generateSummary(initialNotes, initialArchivedNotes),
    isEditMode: false
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNote, (state, action: PayloadAction<Note>) => {
        const newNote = {
          ...action.payload,
          id: uuidv4()
        }
        state.notes.push(newNote)
        state.summary = generateSummary(state.notes, state.archivedNotes)
      })
      .addCase(deleteNote, (state, action: PayloadAction<string>) => {
        const noteId = action.payload;
      const existingNoteIndex = state.notes.findIndex((note) => note.id === noteId);
      
      if (existingNoteIndex !== -1) {
        state.notes.splice(existingNoteIndex, 1);
        state.summary = generateSummary(state.notes, state.archivedNotes);
        }
      })
      .addCase(
        editNote,
        (state, action: PayloadAction<{ id: string; updatedNote: Note }>) => {
          const { id, updatedNote } = action.payload
          const existingNoteIndex = state.notes.findIndex(
            (note) => note.id === id
          )
          if (existingNoteIndex !== -1) {
            state.notes[existingNoteIndex] = {
              ...state.notes[existingNoteIndex],
              ...updatedNote
            }
            state.summary = generateSummary(state.notes, state.archivedNotes)
          }
        }
      )
      .addCase(archiveNote, (state, action: PayloadAction<string>) => {
        const noteId = action.payload
         const existingNoteIndex = state.notes.findIndex(
           (note) => note.id === noteId
         )
         if (existingNoteIndex !== -1) {
           const archivedNote = state.notes.splice(existingNoteIndex, 1)[0]
           state.archivedNotes.push(archivedNote)
           state.summary = generateSummary(state.notes, state.archivedNotes)
         }
      })
      .addCase(unarchiveNote, (state, action: PayloadAction<string>) => {
        const noteId = action.payload
        const existingNoteIndex = state.archivedNotes.findIndex(
          (note) => note.id === noteId
        )

        if (existingNoteIndex !== -1) {
          const unarchivedNote = state.archivedNotes.splice(
            existingNoteIndex,
            1
          )[0]
          state.notes.push(unarchivedNote)
          state.summary = generateSummary(state.notes, state.archivedNotes)
        }
      })
  }
})
export const addNote = createAction<Note>('notes/addNote')
export const deleteNote = createAction<string>('notes/deleteNote')
export const editNote = createAction<{ id: string; updatedNote: Note }>(
  'notes/editNote'
)
export const archiveNote = createAction<string>('notes/archiveNote')
export const unarchiveNote = createAction<string>('notes/unarchiveNote')
export default noteSlice.reducer


function generateSummary(notes: Note[], archivedNotes: Note[]):Summary {
  const summary:Summary = {}

  for (const note of notes) {
    const category = note.category
    if (!summary[category]) {
      summary[category] = [0, 0]
    }
    summary[category][0]++
  }

  for (const note of archivedNotes) {
    const category = note.category
    if (!summary[category]) {
      summary[category] = [0, 0]
    }
    summary[category][1]++
  }

  return summary
}