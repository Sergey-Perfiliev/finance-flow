import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addOperation } from './ActionCreators';

interface AddOperationState {
  isLoading: boolean
  error: string
}

const initialState = {
  isLoading: false,
  error: ''
} as AddOperationState

export const addOperationSlice = createSlice({
  name: 'operation',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [addOperation.fulfilled.type]: (state) => {
      state.isLoading = true;
      state.error = ''
    },
    [addOperation.pending.type]: (state) => {
      state.isLoading = false
    },
    [addOperation.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export default addOperationSlice
