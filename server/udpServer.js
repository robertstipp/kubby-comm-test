const dgram = require("dgram");
const server = dgram.createSocket("udp4");

const CLIENT_HOST = "localhost"; // Client's host
const CLIENT_PORT = 12345; // Client's port
let t = 0;
server.on("listening", () => {
  const address = server.address();

  console.log(
    "Listening to ",
    "Address: ",
    address.address,
    "Port: ",
    address.port
  );
});

setInterval(async () => {
  try {
    const data = Array.from(
      { length: 100 },
      (_, i) => Math.floor(Math.sin(t + i / 100) * 100) / 100
    );
    const message = Buffer.from(JSON.stringify(data));
    server.send(message, 0, message.length, CLIENT_PORT, CLIENT_HOST, (err) => {
      if (err) console.error(err);
      console.log("Metrics sent to " + CLIENT_HOST + ":" + CLIENT_PORT);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}, 1000);

server.bind(CLIENT_PORT, CLIENT_HOST);
