import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'

export interface ISortProps {
  sortProperty: string
}

const initialState: ISortProps = {
  sortProperty: 'newest',
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortProperty(state, action) {
      state.sortProperty = action.payload
    },
  },
})
export const sortProperty = (state: RootState) => state.sortSlice.sortProperty
export const { setSortProperty } = sortSlice.actions
export default sortSlice.reducer
