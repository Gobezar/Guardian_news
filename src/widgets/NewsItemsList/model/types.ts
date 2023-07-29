import { INews } from '../../../../types'

export interface INewsProps {
  news: INews[]
  isLoading: boolean
  error: boolean
  currentPage: number
}
