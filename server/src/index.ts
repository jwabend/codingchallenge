import express from 'express';
import mongoose from 'mongoose'
import { LotrRouter } from './routes/lotr';

const app = express();

app.use(express.json())
app.use(LotrRouter);
app.use(express.json({limit:'1mb'}))

const cors = require('cors');
app.use(cors({
    origin: ['http://localhost:3001', "http://localhost:3000"]
}));

mongoose.connect('mongodb://localhost:27017/todo',{
}, () =>{
    console.log('connected to database')
})


app.listen(3000, () => {
    console.log('server is listening on port 3000')
})

