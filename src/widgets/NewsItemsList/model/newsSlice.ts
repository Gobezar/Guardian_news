import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAllNewsFunc } from '../lib/fetchAllNewsFunc'
import { selectSearchText } from '../../../features/Search/model/searchSlice'
import { sortProperty } from '../../../features/Sort/model/sortSlice'
import { pageSize } from '@/features/PageSizeSelect/model/pageSizeSlice'
import { RootState } from '../../../store/store'
import { INewsProps } from '../model/types'

export const fetchNewsList = createAsyncThunk(
  'news/fetchNewsList',
  async (type: string, { getState }) => {
    const state = getState() as RootState
    const currentPage = state.newsSlice.currentPage
    const searchText = selectSearchText(state)
    const selectedSortProperty = sortProperty(state)
    const pageSizeSelected = pageSize(state)
    const response = await fetchAllNewsFunc(
      searchText,
      selectedSortProperty,
      pageSizeSelected,
      Number(currentPage)
    )
    return { results: response.results, type }
  }
)

const initialState: INewsProps = {
  news: [],
  isLoading: false,
  error: false,
  currentPage: 1,
}

const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    incrementPage(state) {
      state.currentPage = state.currentPage + 1
    },
    removeNews(state) {
      state.news = []
    },
  },
  extraReducers: {
    [fetchNewsList.pending.type]: (state) => {
      state.isLoading = true
      state.error = false
    },

    [fetchNewsList.fulfilled.type]: (state, action) => {
      state.isLoading = false
      if (action.payload.type === 'currentPage') {
        state.news.push(...action.payload.results)
      } else if (action.payload.type === 'filters') {
        state.news = action.payload.results
      }
      state.error = false
    },
    [fetchNewsList.rejected.type]: (state) => {
      state.isLoading = false
      state.news = []
      state.error = true
    },
  },
})

export const { incrementPage, removeNews } = NewsSlice.actions
export default NewsSlice.reducer
