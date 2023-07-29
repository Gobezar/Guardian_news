import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../../store/store'

export interface IPageSizeProps {
  pageSize: number
}

const initialState: IPageSizeProps = {
  pageSize: 10,
}

const pageSizeSlice = createSlice({
  name: 'pageSize',
  initialState,
  reducers: {
    setPageSize(state, action) {
      state.pageSize = action.payload
    },
  },
})
export const pageSize = (state: RootState) => state.pageSizeSlice.pageSize
export const { setPageSize } = pageSizeSlice.actions
export default pageSizeSlice.reducer
