import express from 'express';

const app=express();

app.use("/api", (req,res,next)=>{
    res.send("hii");
});

app.listen(3000);