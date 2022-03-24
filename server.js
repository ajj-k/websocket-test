const express = require("express");
const app = express();
const port = 3000;

app.unsubscribe(express.urlencoded({extended: true}));

//ルーティング
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
    console.log("/ check");
});

app.get("/check", (req, res) => {
    res.sendFile(`${__dirname}/public/check.html`);
    console.log("/check check");
});

app.post("/check", (req, res) => {
    const name = req.body.name;
    const context = req.body.context;
    res.send(`name: ${name}, context: ${context}`);
});

//HTTPサーバ起動
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});