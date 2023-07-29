'use client'
import React, { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '@/store/reduxHooks'
import NewsItemCard from '@/entities/NewsItemCard/UI/NewsItemCard'
import { fetchNewsList, incrementPage } from '../model/newsSlice'
import { useInView } from 'react-intersection-observer'
import { useDebouncedEffect } from '../model/useDebounceEffect'
import SkeletonLoader from '@/shared/SkeletonLoader/UI/SkeletonLoader'
import Loader from '@/shared/Loader/UI/Loader'
import cl from './NewsItemsList.module.scss'
import { INews } from '../../../../types'

const NewsItemsList = () => {
  const dispatch = useAppDispatch()
  const { news, isLoading, currentPage, error } = useAppSelector(
    (state) => state.newsSlice
  )
  const { searchText } = useAppSelector((state) => state.searchSlice)
  const { sortProperty } = useAppSelector((state) => state.sortSlice)
  const { pageSize } = useAppSelector((state) => state.pageSizeSlice)
  const [inViewRef, inView] = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      dispatch(incrementPage())
    }
  }, [inView])

  useDebouncedEffect(
    () => {
      dispatch(fetchNewsList('filters'))
    },
    [searchText, sortProperty, pageSize],
    500
  )

  useDebouncedEffect(
    () => {
      dispatch(fetchNewsList('currentPage'))
    },
    [currentPage],
    90
  )

  return (
    <div className={cl.newsItemList}>
      {!isLoading && news.length < 1 ? (
        <Loader />
      ) : isLoading && news.length < 1 ? (
        <ul>
          {Array.from({ length: 9 }).map((_, index) => (
            <li key={index}>
              <SkeletonLoader />
            </li>
          ))}
        </ul>
      ) : error ? (
        <h2>Сервер не отвечает. Повторите попытку позднее.</h2>
      ) : (
        <ul>
          {news.map((obj, index) => (
            <li key={obj.id} ref={news.length === index + 1 ? inViewRef : null}>
              <NewsItemCard
                id={obj.id}
                webPublicationDate={obj.webPublicationDate}
                webTitle={obj.webTitle}
                {...(obj.fields ? { thumbnail: obj.fields.thumbnail } : {})}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NewsItemsList
