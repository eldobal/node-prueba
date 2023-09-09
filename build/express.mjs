var express = require('express');
var app = express();
const port = 8080;
app.get('/', (req, res) => {
    req;
    res.send('Hello World my firts app with expresss !');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
export {};
