import express from 'express';
import {json} from 'body-parser';
import mongoose  from 'mongoose';
import { todoRouter } from './routes/todo';

const app = express();
app.use(json());
app.use(todoRouter)

mongoose.connect ('mongodb://3.109.124.187:8969/user_db',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('MongoDb connected successfully')
})

app.listen(3008, () =>{
    console.log('Server is listening on 3008')
})
