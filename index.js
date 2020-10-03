const express = require("express")

const server = express();
const port = 2130;

server.use(express.json());

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})