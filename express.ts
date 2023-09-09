import express from 'express';
var app = express();
const port = 8080

app.get('/', (req:any, res:any) => {
  req;
  res.send('Hello World my firts app with expresss !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



