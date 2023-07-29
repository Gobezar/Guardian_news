'use client'
import React, { useRef } from 'react'
import { useAppDispatch } from '@/store/reduxHooks'
import { setSearchText } from '../model/searchSlice'
import Button from '@/shared/Button/UI/Button'
import cl from './Search.module.scss'

const Search: React.FC = () => {
  const dispatch = useAppDispatch()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      onSearchClick()
    }
  }

  const onSearchClick = (): void => {
    const searchText = inputRef.current?.value || ''
    dispatch(setSearchText(searchText))
  }

  return (
    <div className={cl.SearchWrapper}>
      <input
        ref={inputRef}
        className={cl.search_input}
        placeholder="Search..."
        onKeyPress={handleKeyPress}
      />
      <Button onClick={onSearchClick}>Find</Button>
    </div>
  )
}

export default Search
