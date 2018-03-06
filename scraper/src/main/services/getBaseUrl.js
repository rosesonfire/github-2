// Parses url and returns the baseUrl
export default ({ urlParser }) => async (url) => {
  const { protocol, hostname } = await urlParser(url)
  const baseUrl = `${protocol}//${hostname}/`

  return baseUrl
}
