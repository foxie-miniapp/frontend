export const localeNumber = (number: number) => {
  return number.toLocaleString('en-US')
}

export const formatLargeNumber = (number: number) => {
  if (number >= 1_000_000_000) {
    return (number / 1_000_000_000).toFixed(2) + 'B'
  }

  if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(2) + 'M'
  }

  if (number >= 1_000) {
    return (number / 1_000).toFixed(2) + 'K'
  }

  return number.toString()
}
