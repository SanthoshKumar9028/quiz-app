import express from "express";
import path from "path";

const server = express();

const PORT = process.env.PORT || 8080;

//middlewars
server.use(express.json());
server.use(express.static(path.resolve(__dirname, "../build")));
server.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

//servering the index.html file
server.get("/*", (request, response) => {
  response.sendFile(path.resolve("./build/index.html"));
});

server.listen(PORT, () => console.log(`waiting on port ${PORT}`));
