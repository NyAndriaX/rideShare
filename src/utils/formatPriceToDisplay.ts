export const formatPriceToDisplay = (price: number): string => {
  return `${price.toLocaleString('en-US')} Ar`
}