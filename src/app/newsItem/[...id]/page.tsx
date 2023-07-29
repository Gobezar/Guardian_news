import NewsItemDetails from '@/entities/NewsItemDetails/UI/NewsItemDetails'
import { fetchSelectNews } from '@/entities/NewsItemDetails/lib/fetchSelectNews'
import React from 'react'

type PageProps = {
  params: {
    id: Array<string>
  }
}

const newsItem: React.FC<PageProps> = async ({ params: { id } }) => {
  const selectId = id.join('/')
  const data = await fetchSelectNews(selectId)
  console.log(data)

  return (
    <div>
      <NewsItemDetails data={data} />
    </div>
  )
}

export default newsItem
