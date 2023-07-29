'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/store/reduxHooks'
import { pageSizeVariants } from '../model/pageSizeVariants'
import { setPageSize } from '../model/pageSizeSlice'
import cl from './PageSizeSelect.module.scss'

function PageSizeSelect() {
  const dispatch = useAppDispatch()
  const { pageSize } = useAppSelector((state) => state.pageSizeSlice)

  const handleChange = (event: any) => {
    dispatch(setPageSize(Number(event.target.value)))
  }

  return (
    <div className={cl.PageSizeSelect}>
      <p>items on page:</p>
      <select value={pageSize} onChange={handleChange}>
        {pageSizeVariants.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  )
}

export default PageSizeSelect
