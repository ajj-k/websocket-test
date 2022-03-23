const express = require("express");
const app = express();
const port = 3000;

//ルーティング
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
    console.log("/ check");
});

//HTTPサーバ起動
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});