import axios from 'axios'

export async function fetchAllNewsFunc(
  searchText: string,
  sortProperty: string,
  pageSize: number,
  currentPage: number
) {
  const apiUrl = 'https://content.guardianapis.com/search'
  const apiKey = '0ca7eb4d-c36b-475d-a0ca-9beefdccfd9a'

  let url = `${apiUrl}?query-fields=headline&api-key=${apiKey}&show-fields=thumbnail&page=${currentPage}&page-size=${pageSize}`

  if (sortProperty.length > 0 && searchText.length > 0) {
    url += `&order-by=${sortProperty}&q=${searchText}`
  } else if (sortProperty.length > 0) {
    url += `&order-by=${sortProperty}`
  } else if (searchText.length > 0) {
    url += `&q=${searchText}`
  }

  const response = await axios.get(url)
  return response.data.response
}

//0ca7eb4d-c36b-475d-a0ca-9beefdccfd9a    fd43767b-1f5f-4df6-b15b-507cc94a17c2 q=${searchText}&
