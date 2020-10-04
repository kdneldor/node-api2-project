const express = require("express")
const postsRouter = require("./express-router/posts-router")

const server = express();
const port = 2130;

server.use(express.json());
server.use(postsRouter);

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})