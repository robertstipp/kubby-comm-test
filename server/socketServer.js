const WebSocket = require("ws");
const PORT = 3000;
let t = 0;
const wss = new WebSocket.Server({ port: PORT }, () => {
  console.log(`Socket Listening on ${PORT}`);
});

wss.on("connection", function connection(ws) {
  console.log("A new client connected!");

  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
  });

  setInterval(() => {
    const data = Array.from(
      { length: 500 },
      (_, i) => Math.floor(Math.cos(t + i / 100) * 100) / 100
    );
    const jsonData = JSON.stringify(data);
    ws.send(jsonData);
    t += 0.01;
  }, 32);
});
