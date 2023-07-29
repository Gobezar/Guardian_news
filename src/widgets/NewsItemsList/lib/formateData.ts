export function formatDateTime(dateTimeString: string) {
  const date = new Date(dateTimeString)
  const day = date.toLocaleString('en', { day: 'numeric' })
  const month = date.toLocaleString('en', { month: 'long' })
  const year = date.toLocaleString('en', { year: 'numeric' })
  const time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  })

  return `${day} ${month} ${year}, ${time}`
}
