import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const addOperation = createAsyncThunk(
  'operations/add',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('/operations/add', data)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue((e as Error).message)
    }
  }
)
