export const getFutureDate = (currentDate: string) => {
  const date = new Date(currentDate)
  date.setDate(date.getDate() + 1)
  const futureDate = date
  return futureDate.toLocaleString().split('T')[0]
}
