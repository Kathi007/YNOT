const WebSocket = require("ws");
// let formatMessage = require("../utils/messages.js");

function wsServer(httpServer) {
  const wss = new WebSocket.Server({ server: httpServer });
  wss.on("connection", (ws) => {
    //  ws.send('Hallo Client!');

    // ws.on("message", (msg) => {
    //     console.log(JSON.parse(msg))
      
    //     ws.send(msg)
    // })
    ws.on('message', function incoming(data) {
      console.log(data)
      wss.clients.forEach(function each(client) {
        if (client.readyState == WebSocket.OPEN) {
          client.send(data)
        }
      })
    })
  });
}

module.exports = wsServer;
