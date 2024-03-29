const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

require("dotenv").config();
const MONGODB_URI = process.env.MONGO_URI;

const app = express();

app.use(cors());

const server = require("http").Server(app);
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("alou");
  socket.on("connectRoom", (box) => {
    socket.join(box);
  });
});

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

app.use((req, res, next) => {
  req.io = io;

  return next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use(require("./routes"));

server.listen(process.env.PORT || 7777);
