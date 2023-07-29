import NewsItemList from '../widgets/NewsItemsList/UI/NewsItemsList'
import FiltersBlock from '@/widgets/FiltersBlock/UI/FiltersBlock'
import cl from './page.module.scss'

export default function Home() {
  return (
    <main>
      <FiltersBlock />
      <NewsItemList />
    </main>
  )
}
