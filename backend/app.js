import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(
"mongodb+srv://admin:Halgeri@2003<password>@cluster0.2y7a8dx.mongodb.net/BLOG?retryWrites=true&w=majority"
).then(()=>app.listen(5000)).then(()=>console.log("Connected TO Database and Listening TO Localhos 5000"))

.catch((err) => console.log(err));



