'use strict';

var _ioc = require('./../ioc');

var startAPI = async function startAPI() {
  var app = await _ioc.dependencies.app;

  app.listen();
};

startAPI()
// eslint-disable-next-line no-console
.catch(function (err) {
  return console.error(err);
}).finally(async function () {
  // const redisClient = await dependencies.redisClient

  // redisClient.quit()
});
// ============

// import { dependencies } from './../ioc'
// import express from 'express'
// import bodyParser from 'body-parser'

// const startAPI = async () => {
//   // const app = await dependencies.app
//   const app = express()

//   app.use(bodyParser.json())
//   app.use(bodyParser.urlencoded())

//   app.use((req, res, next) => {
//     next()
//     console.log('here')
//   })

//   app.use((req, res, next) => {
//     next()
//   })

//   app.get('/here', (req, res) => {
//     res.json({
//       tata: 3
//     })
//   })

//   app.listen(8080)
// }

// startAPI()
//   // eslint-disable-next-line no-console
//   .catch(err => console.error(err))
//   .finally(async () => {
//     // const redisClient = await dependencies.redisClient

//     // redisClient.quit()
//   })
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0YXJ0QVBJIiwiYXBwIiwibGlzdGVuIiwiY2F0Y2giLCJjb25zb2xlIiwiZXJyb3IiLCJlcnIiLCJmaW5hbGx5Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLFdBQVcsZUFBWEEsUUFBVyxHQUFZO0FBQzNCLE1BQU1DLE1BQU0sTUFBTSxrQkFBYUEsR0FBL0I7O0FBRUFBLE1BQUlDLE1BQUo7QUFDRCxDQUpEOztBQU1BRjtBQUNFO0FBREYsQ0FFR0csS0FGSCxDQUVTO0FBQUEsU0FBT0MsUUFBUUMsS0FBUixDQUFjQyxHQUFkLENBQVA7QUFBQSxDQUZULEVBR0dDLE9BSEgsQ0FHVyxrQkFBWTtBQUNuQjs7QUFFQTtBQUNELENBUEg7QUFRQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZXBlbmRlbmNpZXMgfSBmcm9tICcuLy4uL2lvYydcblxuY29uc3Qgc3RhcnRBUEkgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IGF3YWl0IGRlcGVuZGVuY2llcy5hcHBcblxuICBhcHAubGlzdGVuKClcbn1cblxuc3RhcnRBUEkoKVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbiAgLmZpbmFsbHkoYXN5bmMgKCkgPT4ge1xuICAgIC8vIGNvbnN0IHJlZGlzQ2xpZW50ID0gYXdhaXQgZGVwZW5kZW5jaWVzLnJlZGlzQ2xpZW50XG5cbiAgICAvLyByZWRpc0NsaWVudC5xdWl0KClcbiAgfSlcbi8vID09PT09PT09PT09PVxuXG4vLyBpbXBvcnQgeyBkZXBlbmRlbmNpZXMgfSBmcm9tICcuLy4uL2lvYydcbi8vIGltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG4vLyBpbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcblxuLy8gY29uc3Qgc3RhcnRBUEkgPSBhc3luYyAoKSA9PiB7XG4vLyAgIC8vIGNvbnN0IGFwcCA9IGF3YWl0IGRlcGVuZGVuY2llcy5hcHBcbi8vICAgY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbi8vICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcbi8vICAgYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoKSlcblxuLy8gICBhcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuLy8gICAgIG5leHQoKVxuLy8gICAgIGNvbnNvbGUubG9nKCdoZXJlJylcbi8vICAgfSlcblxuLy8gICBhcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuLy8gICAgIG5leHQoKVxuLy8gICB9KVxuXG4vLyAgIGFwcC5nZXQoJy9oZXJlJywgKHJlcSwgcmVzKSA9PiB7XG4vLyAgICAgcmVzLmpzb24oe1xuLy8gICAgICAgdGF0YTogM1xuLy8gICAgIH0pXG4vLyAgIH0pXG5cbi8vICAgYXBwLmxpc3Rlbig4MDgwKVxuLy8gfVxuXG4vLyBzdGFydEFQSSgpXG4vLyAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4vLyAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxuLy8gICAuZmluYWxseShhc3luYyAoKSA9PiB7XG4vLyAgICAgLy8gY29uc3QgcmVkaXNDbGllbnQgPSBhd2FpdCBkZXBlbmRlbmNpZXMucmVkaXNDbGllbnRcblxuLy8gICAgIC8vIHJlZGlzQ2xpZW50LnF1aXQoKVxuLy8gICB9KVxuIl19