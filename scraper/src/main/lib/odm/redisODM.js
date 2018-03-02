import 'babel-polyfill'

// Generates a flat array of an object's key and values
// Example:
//   { 'name': 'abc', 'code': 56 }
//   is generated as
//   [ 'name', 'abc', 'code', 56 ]
function * flattenObject (d) {
  const entries = Object.entries(d)
  for (let i = 0, len = entries.length; i < len; i++) {
    const entry = entries[i]

    yield entry[0]
    yield entry[1]
  }
}

// Persits data to a redis server
// Data has to be a json array
// Example:
//   [
//     { 'name': 'abc', 'code': 56 },
//     { 'name': 'efg', 'code': 84 }
//   ]
export default ({ redis }) => ({ host, port }) => {
  const client = redis({ host, port })

  // data is the data
  // idKey is the key in the data which will be used as the id in the redis hash
  //   object
  return ({ data, idKey }) => Promise.all(data.map(d => client
    .hmset(d[idKey], ...flattenObject(d))))
}
