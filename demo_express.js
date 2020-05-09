const express = require('express');
const app = express();
app.get('/',(req,res)=> {
    res.send('Hello World!!');
    }); 
    app.get('/api/post', (req,res)=> {
res.send([1,2,3]);
});
app.get('/api/post/:year/:month', (req,res)=>{
res.send(req.params);
});
//enviroment variable Port, vaule set out of app
const port=  process.env.PORT || 3000;

app.listen(port,()=> console.log(`Listening on port ${port}`))

