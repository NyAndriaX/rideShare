export const getFutureDate = (currentDate: string) => {
  const date = new Date(currentDate)
  date.setDate(date.getDate() + 1)
  const futureDate = date
  return futureDate.toLocaleString().split('T')[0]
}

export function formatDateTime(dateString: string, timeString: string) {
  const date = new Date(dateString + ' ' + timeString)
  const day = date.toLocaleDateString('fr-FR', { day: 'numeric' })
  const month = date.toLocaleDateString('fr-FR', { month: 'long' })
  const year = date.toLocaleDateString('fr-FR', { year: 'numeric' })
  return `${day} ${month} ${year} à ${timeString}`
}
