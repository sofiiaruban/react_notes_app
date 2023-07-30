import { createSlice, createAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Note } from '../types/Note'
import { Summary } from '../types/Summary'


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
const initialArchivedNotes: Note[] = [

]

export const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: initialNotes,
    archivedNotes: initialArchivedNotes,
    summary: generateSummary(initialNotes, initialArchivedNotes)
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNote, (state, action: PayloadAction<Note>) => {
        state.notes.push(action.payload);
        state.summary = generateSummary(state.notes, state.archivedNotes);
      })
      .addCase(deleteNote, (state, action: PayloadAction<number>) => {
        const index = action.payload;
        if (index >= 0 && index < state.notes.length) {
          state.notes.splice(index, 1);
          state.summary = generateSummary(state.notes, state.archivedNotes);
        }
      })
      .addCase(editNote, (state, action: PayloadAction<{ index: number; updatedNote: Note }>) => {
        const { index, updatedNote } = action.payload;
        if (index >= 0 && index < state.notes.length) {
          state.notes[index] = updatedNote;
          state.summary = generateSummary(state.notes, state.archivedNotes);
        }
      })
      .addCase(archiveNote, (state, action: PayloadAction<number>) => {
        const index = action.payload;
        if (index >= 0 && index < state.notes.length) {
          const archivedNote = state.notes.splice(index, 1)[0];
          state.archivedNotes.push(archivedNote);
          state.summary = generateSummary(state.notes, state.archivedNotes);
        }
      })
      .addCase(unarchiveNote, (state, action: PayloadAction<number>) => {
        const index = action.payload;
        if (index >= 0 && index < state.archivedNotes.length) {
          const unarchivedNote = state.archivedNotes.splice(index, 1)[0];
          state.notes.push(unarchivedNote);
          state.summary = generateSummary(state.notes, state.archivedNotes);
        }
      });
    }
})
export const addNote = createAction<Note>('notes/addNote')
export const deleteNote = createAction<number>('notes/deleteNote')
export const editNote = createAction<{ index: number; updatedNote: Note }>(
  'notes/editNote'
)
export const archiveNote = createAction<number>('notes/archiveNote')
export const unarchiveNote = createAction<number>('notes/unarchiveNote')
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