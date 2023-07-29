import { combineReducers, configureStore } from '@reduxjs/toolkit'
import newsSlice from '../widgets/NewsItemsList/model/newsSlice'
import searchSlice from '../features/Search/model/searchSlice'
import sortSlice from '@/features/Sort/model/sortSlice'
import pageSizeSlice from '@/features/PageSizeSelect/model/pageSizeSlice'

const rootReducer = combineReducers({
  newsSlice,
  searchSlice,
  sortSlice,
  pageSizeSlice,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
