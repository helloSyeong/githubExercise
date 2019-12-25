import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 5000;

const app = express();

app.set("view engine", "pug");

app.use(express.static("public"));

app.use(logger("tiny"));

app.get("/", (_, res) => res.render("index"));

const server = app.listen(PORT, () =>
  console.log(`Listening on http://localhost:${PORT}`)
);

const io = socketIO.listen(server);

io.on("connect", socket => {
  socket.on("login", data => {
    // const { value } = data;
    console.log("git test");
  });
});
