export interface INews {
  id: string
  fields: fields
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  isHosted: boolean
  pillarId: string
  pillarName: string
}

type fields = {
  thumbnail: string
  bodyText: string
}
