'use client'
import React from 'react'
import { useAppDispatch } from '@/store/reduxHooks'

import { formatDateTime } from '@/widgets/NewsItemsList/lib/formateData'
import { removeNews } from '@/widgets/NewsItemsList/model/newsSlice'
import Image from 'next/image'
import Button from '@/shared/Button/UI/Button'
import Link from 'next/link'

import cl from './NewsItemCard.module.scss'

interface NewsItemCardProps {
  id: string
  thumbnail?: string
  webPublicationDate: string
  webTitle: string
}

const NewsItemCard: React.FC<NewsItemCardProps> = ({
  id,
  thumbnail,
  webPublicationDate,
  webTitle,
}) => {
  const formattedDateTime = formatDateTime(webPublicationDate)
  const dispatch = useAppDispatch()

  return (
    <div className={cl.NewsItemCardWrapper}>
      {thumbnail ? (
        <Image
          src={thumbnail}
          className={cl.image}
          alt="изображение продукта"
          width={300}
          height={300}
        />
      ) : (
        <div style={{ width: 300, height: 300, backgroundColor: 'gray' }}></div>
      )}
      <div className={cl.NewsItemCardText}>
        <p>{formattedDateTime}</p>
        <p className={cl.NewsItemTitle}>{webTitle}</p>
        <div className={cl.NewsItemCardDetails}>
          <Link href={`/newsItem/${id}`}>
            <Button onClick={() => dispatch(removeNews())}>Details ➛</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NewsItemCard
