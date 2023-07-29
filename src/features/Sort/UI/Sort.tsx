'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/store/reduxHooks'
import { setSortProperty } from '../model/sortSlice'
import { sortProperties } from '../consts/sortProperties'
import cl from './Sort.module.scss'

function Sort() {
  const dispatch = useAppDispatch()
  const { sortProperty } = useAppSelector((state) => state.sortSlice)

  const handleChange = (event: any) => {
    dispatch(setSortProperty(event.target.value))
  }

  return (
    <div className={cl.Sort}>
      <select value={sortProperty} onChange={handleChange}>
        <option disabled value="">
          Сортировка по:
        </option>
        {sortProperties.map((opt) => (
          <option key={opt} value={opt}>
            sort by {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Sort
