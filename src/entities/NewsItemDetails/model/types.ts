export interface INewsSelected {
  id: string
  type: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  fields: {
    thumbnail: string
    bodyText: string
    trailText: string
    headline: string
    byline: string
  }
  isHosted: boolean
  pillarId: string
  pillarName: string
}
