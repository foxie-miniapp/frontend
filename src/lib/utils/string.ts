export const truncateAddress = (
  address: string,
  startLength = 7,
  endLength = 5
) => {
  if (!address) return ''
  return `${address.slice(0, startLength)}...${address.slice(-endLength)}`
}
