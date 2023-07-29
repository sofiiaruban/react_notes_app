import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface Note {
  name: string
  created: string
  category: string
  content: string
  dates: string[]
}