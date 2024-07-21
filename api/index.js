import express, { Router } from 'express';
import {PORT,Mongo} from "./config.js"
import mongoose from 'mongoose';
import wishRoutes from './routes/wishRoutes.js'
import cors from 'cors';

const app = express(); 

app.use(cors());

app.get('/', (req, res)=>{
  console.log(req);
  return res.status(234).send('Welcome');
});

app.use(express.json());

app.use('/wishes', wishRoutes);

mongoose.connect(Mongo)
  .then(()=>{
    console.log('app connected to db');
    app.listen(PORT, () => {
      console.log(`App is listeing to port:${PORT}`);
    });
  }).catch((error)=>{
    console.log(error);
  })