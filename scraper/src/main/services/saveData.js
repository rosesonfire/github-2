// Persists the data through the data api
export default ({ http, url }) => async (data) =>
  http.postWithPolling(url, { data })
