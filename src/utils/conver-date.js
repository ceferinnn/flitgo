
export const convertDate = (date) => {
  return new Date(date).toISOString().split('T')[0]
}
