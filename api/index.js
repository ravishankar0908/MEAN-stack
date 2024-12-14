import express from "express";
const port = 3000;
const app = express();

app.use('/',(req, res)=>{
    res.send("Hello world");
});


// make the server start and listen on the port.
app.listen(port, ()=>{
    console.log(`The server is listening on http://localhost:${port}`);
});