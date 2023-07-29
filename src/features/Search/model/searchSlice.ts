import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'

export interface ISearchProps {
  searchText: string
}

const initialState: ISearchProps = {
  searchText: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchText(state, action) {
      state.searchText = action.payload
    },
  },
})

export const selectSearchText = (state: RootState) =>
  state.searchSlice.searchText
export const { setSearchText } = searchSlice.actions
export default searchSlice.reducer
