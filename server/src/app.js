import express from "express";



//import routes
import userRouter from '../src/routes/auth.route.js';

const app = express(); //create express app


//middleware
app.use(express.json());

//routes
app.use("/api/v1/users" , userRouter);





export default app;
