import express from "express";
import RegisterRouter from "./routes/auth.routes.js";
const port = 3000;
const app = express();

// MiddleWares
app.use('/auth', RegisterRouter);



// make the server start and listen on the port.
app.listen(port, ()=>{
    console.log(`The server is listening on http://localhost:${port}`);
});