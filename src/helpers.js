export const buildSquaresSchema = (size) => {
  const sizedEmptyArr = [...Array(size).keys()]
  const squaresSchema = sizedEmptyArr.map(
    (i) => ({id: i+1, data: {}})
  ).map(r => (
    {
      ...r,
      data: sizedEmptyArr.map(
        (i) => ({id: i+1, isActive: false})
      )
    }
  ))
  return squaresSchema
}