'use strict'
const { createServer } = require('http')

const data = JSON.stringify([
  {id: 'A1', name: 'Vacuum Cleaner', rrp: '99.99', info: 'The suckiest vacuum in the world.'},
  {id: 'A2', name: 'Leaf Blower', rrp: '303.33', info: 'This product will blow your socks off.'},
  {id: 'B1', name: 'Chocolate Bar', rrp: '22.40', info: 'Delicious overpriced chocolate.'}
])
//The data array that was in app.js is now our new server.js file, but as a JSON string


const server = createServer((req, res) => {
    // When we call the createServer function it returns a server instance.
    // We call server.listen(3000) to tell the HTTP server to listen on port 3000
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Content-Type', 'application/json')
  res.end(data)//sends our data JSON string as the body of the HTTP response and then ends the connection.
})

server.listen(3000)
