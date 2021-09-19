const express = require('express')
const app = express();
const path= require('path');
const port = 8080;
app.use( path.join(__dirname,'folder'));

app.get('/list',(req , res)=>
{ 
  res.send('folder/index.html');
}); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
