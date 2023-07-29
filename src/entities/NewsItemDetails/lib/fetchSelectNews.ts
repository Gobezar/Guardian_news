import axios from 'axios'

export async function fetchSelectNews(id: string) {
  const apiUrl = 'https://content.guardianapis.com/'
  const apiKey = '0ca7eb4d-c36b-475d-a0ca-9beefdccfd9a'
  let url = `${apiUrl}${id}?api-key=${apiKey}&show-fields=bodyText,thumbnail,trailText,headline,byline`

  try {
    const response = await axios.get(url)
    return response.data.response.content
  } catch (error) {
    console.error('Error fetching news:', error)
    return { error: 'Сервер не доступен, повторите попытку позднее' }
  }
}
