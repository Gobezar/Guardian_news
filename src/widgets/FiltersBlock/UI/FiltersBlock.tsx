import React from 'react'
import Search from '@/features/Search/UI/Search'
import Sort from '@/features/Sort/UI/Sort'
import PageSizeSelect from '@/features/PageSizeSelect/UI/PageSizeSelect'
import cl from './FiltersBlock.module.scss'

const FiltersBlock = () => {
  return (
    <div className={cl.filtersBlockWrapper}>
      <Search />
      <div className={cl.sortAndPageSizeBlock}>
        <Sort />
        <PageSizeSelect />
      </div>
    </div>
  )
}

export default FiltersBlock
