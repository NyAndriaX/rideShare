export function calculateAge(dateString: string) {
  const today = new Date()
  const birthDate = new Date(dateString)
  const birthYear = birthDate.getFullYear()
  const currentYear = today.getFullYear()
  const age = currentYear - birthYear
  return age
}
