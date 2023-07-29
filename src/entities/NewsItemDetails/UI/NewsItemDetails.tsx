import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatDateTime } from '@/widgets/NewsItemsList/lib/formateData'
import Button from '@/shared/Button/UI/Button'
import { INewsSelected } from '../model/types'
import cl from './NewsItemDetails.module.scss'

const NewsItemDetails: React.FC<{ data: INewsSelected }> = ({ data }) => {
  const formattedDateTime = formatDateTime(data.webPublicationDate)
  return (
    <div className={cl.NewsItemDetailsWrapper}>
      <h2>{data.webTitle}</h2>
      <div className={cl.NewsItemDetailsDateBlock}>
        <p>{formattedDateTime}</p>
        <a href={data.webUrl}>read on the Guardian</a>
      </div>
      <div className={cl.ImageAndTextContainer}>
        {data.fields.thumbnail ? (
          <Image
            src={data.fields.thumbnail}
            className={cl.image}
            alt="изображение продукта"
            width={300}
            height={300}
          />
        ) : (
          <div
            className={cl.image}
            style={{ width: 300, height: 300, backgroundColor: 'gray' }}
          ></div>
        )}

        <div className={cl.NewsItemDetailsTextBlock}>
          <h3>{data.webTitle}</h3>
          <p>{data.fields.bodyText}</p>
          <h5>{data.fields.byline}</h5>
        </div>
      </div>
      <div className={cl.NewsItemDetailsButtonBlock}>
        <Link href={'/'}>
          <Button>GO HOME</Button>
        </Link>
      </div>
    </div>
  )
}

export default NewsItemDetails
