const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
let t = 0;
app.get("/events", function (req, res) {
  res.set({
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  });

  const sendEvent = setInterval(() => {
    const data = Array.from(
      { length: 100 },
      (_, i) => Math.floor(Math.sin(t + i / 100) * 100) / 100
    );
    const jsonData = JSON.stringify(data);
    res.write(`data: ${jsonData}\n\n`); // Correct SSE format
    t += 0.01;
  }, 16);

  req.on("close", () => {
    clearInterval(sendEvent);
  });
});

app.listen(3000, () => {
  console.log("SSE server started on port 3000");
});
