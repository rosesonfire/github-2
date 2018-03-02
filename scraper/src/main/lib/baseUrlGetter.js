// Parses url and returns the baseUrl
export default ({ urlParser }) => async ({ url }) => {
  const { hostname } = await urlParser(url)
  const baseUrl = hostname + '/'
  return baseUrl
}