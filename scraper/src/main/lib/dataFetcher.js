// Fetches data from given url
export default ({ httpGetter }) => async ({ url }) => httpGetter(url)
