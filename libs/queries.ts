const projectFields = `
  _id,
  title,
  releaseDate,
  overview,
  poster,
`

export const indexQuery = `
*[_type == "movie"] | order(date desc, _updatedAt desc) {
  ${projectFields}
}`